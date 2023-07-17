import Route from '@ember/routing/route';

/**
 * This route is used embedded in an iframe in documentation to show
 * examples of various UI/Env combinations, like:
 * https://salsify.github.io/ember-exclaim/example?ui=...&env=...
 */

export default class ExampleRoute extends Route {
  queryParams = { ui: {}, env: {} };

  model(params) {
    return params;
  }

  setupController(controller, params) {
    controller.ui = params.ui;
    controller.env = params.env;
  }
}
