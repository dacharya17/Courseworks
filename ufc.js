
var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        fighter(name: String!): Fighter
        fighters(weightclass: String): [Fighter]
    },
    type Fighter {
        id: Int
        name:String
        nickname: String
        noOfwins: Int
        noOflosses: Int
        height: String
        weightclass:String
        place:String
    }
`);
var fightersData = [
    {
        id: 1,
        name: 'Fabricio Werdu',
        nickname: 'Fabricio Werdum',
        noOfwins: 24,
        noOflosses: 9,
        height: '193 CM',
        weightclass: 'Heavyweight',
        place :'Los Angeles, CA'

    },
    {
        id: 2,
        name:'Jussier Formiga',
        nickname: 'Formiga',
        noOfwins: 23,
        noOflosses: 8,
        height: '165 CM',
        weightclass: 'Flyweight',
        place :'Natal, Brazil'
    },
    {
        id: 3,
        name:'Bevon Lewis',
        nickname: 'The Extraordinary Gentleman',
        noOfwins: 10,
        noOflosses: 3,
        height: '191 CM',
        weightclass: 'Middleweight',
        place :'Lawrenceville, GA'
    },
    {
        id: 4,
        name:'Justin Ledet',
        nickname: 'El Blanco',
        noOfwins: 9,
        noOflosses: 4,
        height: '193 CM',
        weightclass: 'Heavyweight',
        place :'Rosharan, TX'
    },
    {
        id: 5,
        name:'John Phillips',
        nickname: 'The Welsh Wrecking Machine',
        noOfwins: 22,
        noOflosses: 11,
        height: '180 CM',
        weightclass: 'Middleweight',
        place :'Swansea, UK'
    },
    {
        id: 6,
        name:'Anderson Silva',
        nickname: 'The Spider',
        noOfwins: 1,
        noOflosses: 1,
        height: '188 CM',
        weightclass: 'Middleweight',
        place :'Curitiba, Brazil'
    },
    {
        id: 7,
        name:'Khabib Nurmagomedov',
        nickname: 'The Eagle',
        noOfwins: 29,
        noOflosses: 0,
        height: '178 CM',
        weightclass: 'Lightweight',
        place :'Makhachkala, Russia'
    },
    {
        id: 8,
        name:'Danyelle Wolf',
        nickname: 'N/A',
        noOfwins: 1,
        noOflosses: 0,
        height: '180 CM',
        weightclass: 'Featherweight',
        place :'Wrightville, Pennsylvania'
    },
    {
        id: 9,
        name:'Michael Chandler',
        nickname: 'Iron',
        noOfwins: 21,
        noOflosses: 5,
        height: '173 CM',
        weightclass: 'Welterweight',
        place :'Boca Raton, FL'
    },
    {
        id: 10,
        name:'Tony Ferguson',
        nickname: 'El Cucuy',
        noOfwins: 25,
        noOflosses: 4,
        height: '183 CM',
        weightclass: 'Lightweight',
        place :'Ventura, CA'
    },
    {
        id: 11,
        name:'Tj Dillashaw',
        nickname: 'N/A',
        noOfwins: 20,
        noOflosses: 4,
        height: '169 CM',
        weightclass: 'Flyweight',
        place :'Denver, CO'
    },
    {
        id: 12,
        name:'Michel Prazers',
        nickname: 'Tractor',
        noOfwins: 26,
        noOflosses: 3,
        height: '168 CM',
        weightclass: 'Lightweight',
        place :'Belem, Brazil'
    },
    {
        id: 13,
        name:'Jessica Penne',
        nickname: 'N/A',
        noOfwins: 12,
        noOflosses: 5,
        height: '165 CM',
        weightclass: 'Straweight',
        place :'Huntington Beach, CA'
    },
    {
        id: 14,
        name:'Raphael Pessoa',
        nickname: 'Bebezoa',
        noOfwins: 10,
        noOflosses: 2,
        height: '191 CM',
        weightclass: 'Heavyweight',
        place :'Rio De Janeiro, Brazil'
    },
    {
        id: 15,
        name:'Deron Winn',
        nickname: 'N/A',
        noOfwins: 8,
        noOflosses: 2,
        height: '168 CM',
        weightclass: 'Middleweight',
        place :'Gilroy, CA'
    },
    {
        id: 16,
        name:'Chase Sherman',
        nickname: 'The Vanilla Gorilla',
        noOfwins: 21,
        noOflosses: 6,
        height: '193 CM',
        weightclass: 'Heavyweight',
        place :'DIberVille, MS'
    },
    {
        id: 17,
        name:'Jesse Ronson',
        nickname: 'The Body Snatcher',
        noOfwins: 21,
        noOflosses: 10,
        height: '175 CM',
        weightclass: 'Heavyweight',
        place :'Ontario, Canada'
    },
    {
        id: 18,
        name:'Petr Yan',
        nickname: 'No Mercy',
        noOfwins: 15,
        noOflosses: 1,
        height: '171 M',
        weightclass: 'Bantamweight',
        place :'Oblast, Russia'
    },
    {
        id: 19,
        name:'Jon Jones',
        nickname: 'Bones',
        noOfwins: 26,
        noOflosses: 1,
        height: '193 CM',
        weightclass: 'Light Heavyweight',
        place :'Albuquerque, NM'
    },
    {
        id: 20,
        name:'Max Holloway',
        nickname: 'Blessed',
        noOfwins: 21,
        noOflosses: 6,
        height: '180 CM',
        weightclass: 'Lightweight',
        place :'Waianae, Hawaii'
    },

]
var getFighter = function(args) { 
    var name = args.name;
    return fightersData.filter(fighter => {
        return fighter.name === name;
    })[0];
}
var getFighters = function(args) {
    if (args.weightclass) {
        var weightclass = args.weightclass;
        return fightersData.filter(fighter => fighter.weightclass === weightclass);
    } else {
        return fightersData;
    }
}
var root = {
    fighter: getFighter,
    fighters: getFighters
};

var app = express();
app.use('/testgraphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/testgraphql'));