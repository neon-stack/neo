import 'reflect-metadata';
import { Container } from 'typedi';

import { RouteManager } from './Service/RouteManager';
import { buildCombinedPluginIdRouteIdFromComponents } from './Type/Definition/CombinedPluginIdRouteId';
import { validatePluginIdFromString } from './Type/Definition/PluginId';
import { RouteConfiguration } from './Type/Definition/RouteConfiguration';
import { validateRouteIdFromString } from './Type/Definition/RouteId';

export * as Error from './Error';
// export * as Page from './Page';
export * as Service from './Service';
export * as Type from './Type';
export { Container };

console.log('Hello world :D');

const routeManager = Container.get(RouteManager);

const pluginId = validatePluginIdFromString('ember-nexus');

const route1: RouteConfiguration = {
  pluginId: pluginId,
  routeId: validateRouteIdFromString('route1'),
  route: '/route1',
  priority: 100,
  webComponent: 'ember-nexus-route1',
  guards: [],
};

// const route1copy : RouteConfiguration = {
//   pluginId: pluginId,
//   routeId: validateRouteIdFromString('route1-copy'),
//   route: '/route1',
//   priority: 500,
//   webComponent: 'ember-nexus-route1-copy',
//   guards: []
// };

const route2: RouteConfiguration = {
  pluginId: pluginId,
  routeId: validateRouteIdFromString('route2'),
  route: '/route2',
  priority: 200,
  webComponent: 'ember-nexus-route2',
  guards: [],
};

const route3: RouteConfiguration = {
  pluginId: pluginId,
  routeId: validateRouteIdFromString('route3'),
  route: '/route3',
  priority: 100,
  webComponent: 'ember-nexus-route3',
  guards: [],
};

const route4: RouteConfiguration = {
  pluginId: pluginId,
  routeId: validateRouteIdFromString('route4'),
  route: '/route4',
  priority: 100,
  webComponent: 'ember-nexus-route4',
  guards: [],
};

const route5: RouteConfiguration = {
  pluginId: pluginId,
  routeId: validateRouteIdFromString('route5'),
  route: '/route5',
  priority: 100,
  webComponent: 'ember-nexus-route5',
  guards: [],
};

routeManager.addRouteConfiguration(route1);
routeManager.addRouteConfiguration(route2);
// routeManager.addRouteConfiguration(route1copy);
routeManager.addRouteConfiguration(route3);
routeManager.addRouteConfiguration(route4);
routeManager.removeRouteConfiguration(buildCombinedPluginIdRouteIdFromComponents(pluginId, route3.routeId));
routeManager.addRouteConfiguration(route5);

console.log(routeManager.matchRoute('/route1'));
