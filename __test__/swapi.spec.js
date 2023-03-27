const request = require('supertest')

it('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async () => {
    // https://swapi.dev/api
    // people/1

    const resposta = await request(`https://swapi.dev/api`).get(`/people/1`)

    expect(resposta.status).toBe(200)
    expect(resposta.body.films).toBeDefined()
    expect(resposta.body.vehicles.length).toBeGreaterThan(0)
    expect(resposta.body.name).toBe('Luke Skywalker')

    // assincronismo + promessas
    // Async + Promises

});

it(' Deve receber uma mensagem de erro, quando buscar uma pessoa inexixtente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/999')

    expect(resposta.status).toBe(404)
    expect(resposta.body.detail).toBe('Not found')
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    })

})


