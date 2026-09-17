import { initNavigation } from "./navigation.js";
import { initStandardCalculator } from "./standardCalculator.js";
import { initScientificCalculator } from "./scientificCalculator.js";
import { initConverters } from "./converters.js";
import { initFinance } from "./finance.js";
import { initHealthUtility } from "./health-utility.js";
import { initAppliedPhysics } from "./applied-physics.js";
import { initMetricesShapes } from "./metrices-shapes.js";
import { initDeveloperTools } from "./developers-tools.js";
import { initCredentials } from "./credentials- security.js";

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initStandardCalculator();
  initScientificCalculator();
  initConverters();
  initFinance();
  initHealthUtility();
  initAppliedPhysics();
  initMetricesShapes();
  initDeveloperTools();
  initCredentials();
});
