// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
const addSteak = ()=> {addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                document.getElementById("table").innerHTML +=
                  '<img src="public/images/steak.jpg"/>';
              })
            })
          })
        })
      })
    })
  })
});
}



// Iteration 2 using `.then()`
const addMashPotatoes = ()=> {addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          document.getElementById("table").innerHTML +=
            '<img src="public/images/mashPotatoes.jpg"/>';
        })
      })
    })
  })
});
}

// // Iteration 3 using async and await

//   async function makeFood(step) {
//     // ... your code here
    
//   }
//   makeFood(eachStep);

const addBrusselSprouts = () => {
  addFood(brusselSprouts[0], "#brusselSprouts").then(() => {
    addFood(brusselSprouts[1], "#brusselSprouts").then(() => {
      addFood(brusselSprouts[2], "#brusselSprouts").then(() => {
        addFood(brusselSprouts[3], "#brusselSprouts").then(() => {
          addFood(brusselSprouts[4], "#brusselSprouts").then(() => {
            addFood(brusselSprouts[5], "#brusselSprouts").then(() => {
              addFood(brusselSprouts[6], "#brusselSprouts").then(() => {
                addFood(brusselSprouts[7], "#brusselSprouts").then(() => {
                  addFood(brusselSprouts[8], "#brusselSprouts").then(() => {
                    document.getElementById("table").innerHTML +=
                      '<img src="public/images/brusselSprouts.jpg"/>';
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

// const addBrusselSprouts = ()=> {addFood(brusselSprouts[0], '#brusselSprouts', () => {
//   addFood(brusselSprouts[1], '#brusselSprouts', () => {
//     addFood(brusselSprouts[2], '#brusselSprouts', () => {
//       addFood(brusselSprouts[3], '#brusselSprouts', () => {
//         addFood(brusselSprouts[4], '#brusselSprouts', () => {
//           addFood(brusselSprouts[5], '#brusselSprouts', () => {
//             addFood(brusselSprouts[6], '#brusselSprouts', () => {
//               addFood(brusselSprouts[7], '#brusselSprouts', () => {
//                 addFood(brusselSprouts[8], '#brusselSprouts', () => {
//                   document.getElementById("table").innerHTML +=
//                   '<img src="public/images/brusselSprouts.jpg"/>';
//                 })
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// })
// }

Promise.all([addSteak(), addMashPotatoes(), addBrusselSprouts()]).then(() => {
  document.body.innerHTML += `
     <button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served</button>
   `;
  
});
