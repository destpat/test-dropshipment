This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Test technique : Fullstack Javascript

Nous souhaitons faire un ​dropshipment​​, c’est-à-dire l’envoi d’un grand nombre de colis.

Nous possédons une liste d’articles (​item​) disponibles dans l’entrepôt ainsi qu’une liste de commandes (​order​), chacune des commandes est expédiée dans un ou plusieurs colis (​parcel​). Un colis ne doit pas peser plus de 30kg.

#### Le schéma des données est le suivant :

| `Item` |             `Order`              |             `Parcel`             |
| :----: | :------------------------------: | :------------------------------: |
|   id   |                id                |             order_id             |
| weight | items: [ { item_id, quantity } ] | items: [ { item_id, quantity } ] |
|  name  |            order_date            |              weight              |
|        |                                  |           tracking_id            |
|        |                                  |          palette_number          |

Nous remettons les colis au transporteur sur des palettes contenant chacune 15 colis. Il faut donc attribuer un numéro de palette à chaque colis assemblé (les 15 premiers seront la palette n°1, les 15 suivant n°2 etc).

Une fois ces colis constitués, nous souhaitons générer un code de suivi auprès du transporteur. Un appel POST en HTTP sur ​https://helloacm.com/api/random/?n=15​ génère le code de tracking qu’il faudra par la suite associer au colis.

#### Nous nous rémunérons au poids du colis avec ce forfait :

| Range              | Price |
| ------------------ | ----- |
| Entre 0 et 1kg     | 1€    |
| Entre 1kg et 5kg   | 2€    |
| Entre 5kg et 10kg  | 3€    |
| Entre 10kg et 20kg | 5€    |
| Plus de 20kg       | 10€   |

Le test consiste à générer les colis avec leur code de suivi, puis à calculer la rémunération de l’opération.
