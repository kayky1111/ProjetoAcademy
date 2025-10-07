"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagamentoRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Pagamento_1 = require("../models/Pagamento");
exports.pagamentoRepository = AppDataSource_1.AppDataSource.getRepository(Pagamento_1.Pagamento);
