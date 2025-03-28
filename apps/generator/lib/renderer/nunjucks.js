const Nunjucks = require('nunjucks');
const nunjucksExport = module.exports;

/**
 * Configures Nunjucks templating system
 * @deprecated This method is deprecated. For more details, see the release notes: https://github.com/asyncapi/generator/releases/tag/%40asyncapi%2Fgenerator%402.6.0
 * @private
 * @param {boolean} debug flag
 * @param {string} templateDir path
 */
nunjucksExport.configureNunjucks = (debug, templateDir) => {
  const config = {};
  if (debug) config.dev = true;

  return new Nunjucks.Environment(new Nunjucks.FileSystemLoader(templateDir), config);
};

/**
 * Renders the template with nunjucks and returns a string.
 * @deprecated This method is deprecated. For more details, see the release notes: https://github.com/asyncapi/generator/releases/tag/%40asyncapi%2Fgenerator%402.6.0
 * @param {import('@asyncapi/parser').AsyncAPIDocument} asyncapiDocument 
 * @param {string} templateString template filecontent to be rendered with nunjucks
 * @param {string} filePath path to the template file
 * @param {Object} extraTemplateData Extra data to pass to the template.
 * @param {Object} templateParams provided template parameters
 * @param {string} originalAsyncAPI 
 * @param {} nunjucks instance
 * @return {Promise}
 */
nunjucksExport.renderNunjucks = (asyncapiDocument, templateString, filePath, extraTemplateData, templateParams, originalAsyncAPI, nunjucks) => {
  return new Promise((resolve, reject) => {
    nunjucks.renderString(templateString, {
      asyncapi: asyncapiDocument,
      params: templateParams,
      originalAsyncAPI,
      ...extraTemplateData
    }, { path: filePath }, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
