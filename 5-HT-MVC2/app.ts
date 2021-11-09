import { Controller } from "./src/controllers/controller";
import { Model } from "./src/models/model";
import { View } from "./src/views/view";

const app = new Controller(new Model(), new View());

