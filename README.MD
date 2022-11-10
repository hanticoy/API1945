Para ejecutar requiere instalar:
npm install express mongoose 

Modo de uso:

GET “/” servirá la colección completa de las personas nacidas en 1955
http://localhost:5100
Body: no aplica

Response: 
[
    {
        "_id": "636d5b68f2deabe8ea494f03",
        "first_name": "steve",
        "last_name": "Jobs",
        "email": "steve.jobs@gmail.com",
        "password": "123456",
        "createdAt": "2022-11-10T20:13:28.664Z",
        "updatedAt": "2022-11-10T20:13:28.664Z",
        "__v": 0
    }
]




POST “/nuevo/:nombre/” agregará un nombre a la base de datos. Así que, para agregar a Steve Jobs a nuestra base de datos, debes escribir en la URL “localhost:8000/nuevo/Steve Jobs”
http://localhost:5100/nuevo

Body JSON:
{
"first_name": "steve",
"last_name": "Jobs",
"email": "steve.jobs@gmail.com",
"password": "123456"
}

Response:
{
    "first_name": "steve",
    "last_name": "Jobs",
    "email": "steve.jobs@gmail.com",
    "password": "123456",
    "_id": "636d5f5e0d5aeda1c1d56f76",
    "createdAt": "2022-11-10T20:30:22.608Z",
    "updatedAt": "2022-11-10T20:30:22.608Z",
    "__v": 0
}


GET “/remove/:nombre/” eliminará un nombre de la base de datos.
http://localhost:5100/remove
Body JSON:
{
    "_id": "636d57dee80f54419378d9a1"
}

Respuesta:
{
    "acknowledged": true,
    "deletedCount": 1
}

GET “/:nombre” traerá el documento de esa persona en particular.
http://localhost:5100/query
body JSON:
{
    "_id": "636d57dee80f54419378d9a1"
}

Respesta:
[
    {
        "_id": "636d5f5e0d5aeda1c1d56f76",
        "first_name": "steve",
        "last_name": "Jobs",
        "email": "steve.jobs@gmail.com",
        "password": "123456",
        "createdAt": "2022-11-10T20:30:22.608Z",
        "updatedAt": "2022-11-10T20:30:22.608Z",
        "__v": 0
    }
]