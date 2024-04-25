// Importations nécessaires avec CommonJS
const request = require('supertest');
const app = require('../backend/server');  // Assurez-vous que cela pointe vers votre fichier serveur correctement configuré

describe('API Tests', () => {
  let server;

  beforeAll((done) => {
    // Start the server and capture the server object
    server = app.listen(3000, () => {
      console.log('Server started on port 3000');
      done();
    });
  });

  afterAll((done) => {
    // Close the server
    server.close((err) => {
      if (err) {
        console.error('Error closing server:', err);
        done(err);
      } else {
        console.log('Server closed');
        done();
      }
    });
  });

  it('GET /contacts - should return all contacts', async () => {
    const response = await request(app).get('/contacts');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
 
  });

  /*
  it('POST /contacts - should create a new contact', async () => {
    const newContact = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890'
    };
    
    const response = await request(app).post('/contacts').send(newContact);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newContact);
  });
*/

});
