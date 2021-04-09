const { Products, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Product Model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Products.sync({ force: true }));
    describe('name', () => {
      
      it('should throw an error if name is not a string', (done) => {
        Products.create({
          name:1,
          description:"product1",
          price: 99.99,
          available: true,
          discount: 0.2
        })
          .then(() => done(new Error('Name must be an String')))
          .catch(() => done());
      });

      it('should throw an error if description is not a string', (done) => {
        Products.create({
          name: "product1",
          description: 1,
          price: 99.99,
          available: true,
          discount: 0.2
        })
          .then(() => done(new Error('Description must be an String')))
          .catch(() => done());
      });

      it('should throw an error if price is not a decimal', (done) => {
        Products.create({
          name: "product1",
          description: "product1",
          price: "1",
          available: true,
          discount: 0.2
        })
          .then(() => done(new Error('Price must be a decimal')))
          .catch(() => done());
      });

      it('should throw an error if available is not a boolean', (done) => {
        Products.create({
          name: "product1",
          description: 1,
          price: 99.99,
          available: 1,
          discount: 0.2
        })
          .then(() => done(new Error('Available must be a boolean')))
          .catch(() => done());
      });

      it('should throw an error if discount is not a float', (done) => {
        Products.create({
          name: "product1",
          description: 1,
          price: 99.99,
          available: true,
          discount: 100
        })
          .then(() => done(new Error('Discount must be a float')))
          .catch(() => done());
      });

      it('should throw an error if discount is not defined', (done) => {
        Products.create({
          name: "product1",
          description: 1,
          price: 99.99,
          available: true
        })
          .then(() => done(new Error('Discount cannot be undefined')))
          .catch(() => done());
      });      


    });
  });
});

