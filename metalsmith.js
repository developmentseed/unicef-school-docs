'use strict';
var defaultsDeep = require('lodash.defaultsdeep');

var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var debug = require('metalsmith-debug');
var dirHierarchy = require('metalsmith-directory-hierarchy');
var kebabCase = require('lodash.kebabcase');

var markdown = require('./md-renderer');

module.exports = function (opts) {
  // Reload config.
  var config = require('./_config');

  if (opts.env === 'staging') {
    config = defaultsDeep({}, require('./_config-staging'), config);
  } else if (opts.env === 'development') {
    config = defaultsDeep({}, require('./_config-dev'), config);
  }

  return Metalsmith(__dirname)
    .metadata({ site: config })
    .source('./app')
    .ignore(['assets', 'layouts', 'includes'])
    .destination('./build')
    .clean(true)
    .use(originalFileURI('originalURI'))
    .use(collections({
      posts: {
        pattern: 'posts/**/*.md',
        sortBy: 'originalURI'
      }
    }))
    .use(mdImageAbsolutePath(config.baseurl))
    .use(addPostSectionInfo())
    .use(dirHierarchy({
      name: 'hierarchy',
      test: /posts\/(.)+/,
      sortBy: 'title'
    }))
    .use(markdown())
    .use(permalinks({
      // original options would act as the keys of a `default` linkset.
      pattern: ':title',

      // each linkset defines a match, and any other desired option.
      linksets: [{
        match: { collection: 'posts' },
        pattern: ':sectionSlug/:title'
      }]
    }))
    .use(permalinkOverride())
    .use(layouts({
      engine: 'ejs',
      directory: 'app/layouts'
    }))
    .use(debug());
};

/**
 * Override the permalink if a permalink property is set in the frontmatter.
 */
function permalinkOverride () {
  return function (files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach(function (file) {
      var data = files[file];
      var permalink = data.permalink;

      if (permalink) {
        // remove leading slash, and trailing / + index.html if exists.
        permalink = permalink.replace(/^\//, '').replace(/\/(index\.html)?$/, '');
        // Store in path.
        data.path = permalink;
        // Complete file path. If at this point the permalink is empty means
        // that we want the index file.
        permalink = (permalink === '' ? '' : `${permalink}/`) + 'index.html';
        delete files[file];
        files[permalink] = data;
      }
    });
  };
}

/**
 * Add the section the post belongs to it.
 * Adds:
 *   section: {
 *     key,
 *     label
 *   }
 */
function addPostSectionInfo (files, metalsmith, done) {
  return function (files, metalsmith, done) {
    setImmediate(done);
    var sectionsMeta = metalsmith.metadata().site.sectionsMeta;
    var sections = Object.keys(sectionsMeta);
    // Add the section the post belongs to it.
    Object.keys(files).forEach(function (file) {
      sections.forEach(function (sec) {
        if (file.match('^posts/' + sec + '/')) {
          files[file].section = {
            key: sec,
            label: sectionsMeta[sec]
          };

          // Store section slug as highlevel prop to be used by the permalink.
          files[file].sectionSlug = kebabCase(sectionsMeta[sec]);
        }
      });
    });
  };
}

/**
 * Store the original file uri.
 */
function originalFileURI (uriKey) {
  return function (files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach(function (file) {
      files[file][uriKey] = file;
    });
  };
}

/**
 * Image path fix
 */
function mdImageAbsolutePath (baseurl) {
  return function (files, metalsmith, done) {
    setImmediate(done);
    const sections = ['contents', 'innovation'];
    const regEx = new RegExp('="/assets/graphics/content', 'gm');
    Object.keys(files).forEach(function (key) {
      let file = files[key]
      if (file.layout === 'post.html') {
        sections.forEach(sec => {
          if (file[sec]) {
            let content = file[sec].toString();
            content = content.replace(regEx, `="${baseurl}/assets/graphics/content`);
            file[sec] = Buffer.from(content, 'utf-8');
          }
        });
      }
    });
  };
}
