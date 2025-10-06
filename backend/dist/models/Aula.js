"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = void 0;
const typeorm_1 = require("typeorm");
const Estudante_1 = require("./Estudante");
const Professor_1 = require("./Professor");
const Curso_1 = require("./Curso");
let Aula = class Aula {
};
exports.Aula = Aula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
    // usamos o sinal de exclamação para indicar que o campo será inicializado posteriormente
    ,
    __metadata("design:type", Number)
], Aula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Aula.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aula.prototype, "duracao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Estudante_1.Estudante, estudante => estudante.aula),
    __metadata("design:type", Estudante_1.Estudante)
], Aula.prototype, "estudante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Professor_1.Professor, professor => professor.aula),
    __metadata("design:type", Professor_1.Professor)
], Aula.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Curso_1.Curso, curso => curso.aula),
    __metadata("design:type", Curso_1.Curso)
], Aula.prototype, "curso", void 0);
exports.Aula = Aula = __decorate([
    (0, typeorm_1.Entity)()
], Aula);
