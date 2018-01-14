
# WebTech
### Proiect : Manager de trasee integrat cu Google Directions :globe_with_meridians:

  Aplicatia doreste sa usureze creearea de trasee, editarea si stergerea acestora dar si afisarea lor cu ajutorul Google Maps/ Directions API. 
  
---
**Status**:
- [x] Faza 1: Specificații detaliate, descrierea proiectului, prezența unui proiect în git;
- [x] Faza 2: Serviciu RESTful funcțional în repository +  instrucţiuni de rulare;
- [ ] Faza 3: Aplicața completă + demo

---
Basic UI 
![printtw](https://user-images.githubusercontent.com/29106092/34912975-2f561be8-f8f8-11e7-9d71-5e50cd86dcf5.png)
---
#### *Components*
 - harta
 - input form pentru adrese
 - input form pentru search by id
 - lista ul trasee 
 - li traseu 

#### *User actions*
  - adaugare traseu
  - stergere traseu
  - adaugare categorii traseu
  - modificare traseu din lista (update)
  - cautare traseu 
  - adaugare/ stergere categorie

#### *API calls*
 
  - GET /categories -> gets category list
  - GET /categories/:id -> gets category by id
  - GET /tracks -> track list
  - GET /tracks/:id -> read track by id
  - GET /categories/:id/track -> tracks by category_id

  
  - POST /categories -> creates category
  - POST /tracks ->creates track
  
  - PUT /categories/:id -> update category by id
  - PUT /tracks/:id -> update track by id
  
  - DELETE /categories/:id -> delete cat by id
  - DELETE /tracks/:id -> delete track by id
  
