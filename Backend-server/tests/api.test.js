const request = require('supertest');
const app = require('../server'); // Adjust the path as necessary

describe('API Endpoints', () => {
    it('should return a list of students', async () => {
        const response = await request(app).get('/api/students');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should create a new student', async () => {
        const newStudent = {
            name: 'John Doe',
            age: 20,
            grade: 'A'
        };
        const response = await request(app).post('/api/students').send(newStudent);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(newStudent.name);
    });

    it('should return a specific student', async () => {
        const response = await request(app).get('/api/students/1'); // Adjust ID as necessary
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
    });

    it('should update a student', async () => {
        const updatedStudent = {
            name: 'Jane Doe',
            age: 21,
            grade: 'B'
        };
        const response = await request(app).put('/api/students/1').send(updatedStudent); // Adjust ID as necessary
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updatedStudent.name);
    });

    it('should delete a student', async () => {
        const response = await request(app).delete('/api/students/1'); // Adjust ID as necessary
        expect(response.status).toBe(204);
    });
});