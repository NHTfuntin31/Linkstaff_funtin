export function handleUser(req, res, next){
   res.json([{
      id: 1,
      name: 'thinh',
      address: 'tokyo'
   },
   {
      id: 2,
      name: 'hien',
      address: 'osaka'
   },
   ])
   }