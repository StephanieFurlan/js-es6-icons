// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

$(document).ready(function() {

   var icons = [
      {
         name: "fighter-jet",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },
      {
         name: "dog",
         prefix: "fa-",
         type: "animal",
         family: "fas"
      },
      {
         name: "pepper-hot",
         prefix: "fa-",
         type: "vegetable",
         family: "fas"
      },
      {
         name: "hippo",
         prefix: "fa-",
         type: "animal",
         family: "fas"
      },
      {
         name: "dragon",
         prefix: "fa-",
         type: "animal",
         family: "fas"
      },
      {
         name: "fish",
         prefix: "fa-",
         type: "animal",
         family: "fas"
      },
      {
         name: "wheelchair",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },
      {
         name: "apple-alt",
         prefix: "fa-",
         type: "vegetable",
         family: "fas"
      },
      {
         name: "apple-alt",
         prefix: "fa-",
         type: "vegetable",
         family: "fas"
      },
      {
         name: "carrot",
         prefix: "fa-",
         type: "vegetable",
         family: "fas"
      },
      {
         name: "spider",
         prefix: "fa-",
         type: "animal",
         family: "fas"
      },
      {
         name: "lemon",
         prefix: "fa-",
         type: "vegetable",
         family: "fas"
      },

      {
         name: "space-shuttle",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },
      {
         name: "tractor",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },
      {
         name: "truck-monster",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },
      {
         name: "tram",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      },

      {
         name: "helicopter",
         prefix: "fa-",
         type: "vehicle",
         family: "fas"
      }
   ]

   var colors = [
      "mediumspringgreen",
      "royalblue",
      "tomato"
   ]

   const typeArray = getTypes(icons);
   const coloredIconArray = setColors(icons, typeArray);

   // containers for display
   const iconContainer = $(".icons-container")
   const selectContainer = $("#select-icons");

   setTypes(typeArray, selectContainer);

   // first display
   displayIcons(coloredIconArray, iconContainer);

   // event change on select
   selectContainer.on("change", function() {
      const type = $(this).val();
      if (type == "all") {
         displayIcons(coloredIconArray, iconContainer);
      } else {
         const filteredArray = filterArray(coloredIconArray, type);
         displayIcons(filteredArray, iconContainer);
      }

   });




   //------------------------------------
   // FUNCTIONS

   function displayIcons(iconArray, container) {
      container.empty();
      iconArray.forEach(icon => {
         const {name, prefix, type, family, color} = icon;
         container.append(`
            <div class="icon">
               <div class="icon-title">${name}</div>
               <i style="color:${color}" class="${family} ${prefix}${name}"></i>
            </div>
            `);
      });
   }

   function getTypes(iconArray) {
      let typeArray = [];
      iconArray.forEach(icon => {
         if (!typeArray.includes(icon.type)) {
            typeArray.push(icon.type);
         }
      });
      return typeArray;
   }

   function setColors(iconArray, typeArray) {
      const coloredIconArray = [];
      iconArray.forEach(icon => {
         const {type} = icon;
         const coloredIcon = {
            ...icon,
            color: colors[typeArray.indexOf(type)]
         }
         coloredIconArray.push(coloredIcon);
      });
      return coloredIconArray;
   }

   function setTypes(typeArray, container) {
      typeArray.forEach(type => {
         container.append(`
            <option value="${type}">${type[0].toUpperCase() + type.slice(1)}</option>
         `);
      })
   };

   function filterArray(iconArray, type) {
      return iconArray.filter(icon => {
         return icon.type == type;
      });
   }


});
