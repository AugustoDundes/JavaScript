let listArray = [];
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById('adicionar').addEventListener('click', function (event) {
                event.preventDefault();
                let lista = document.getElementById('listaItens');
                let texto = document.getElementById('textInput').value;
                if(texto != "")
                {
                    listArray.push(texto);
                    listArray.sort();
                    lista.innerHTML = "";

                    listArray.forEach(function (item, index) {
                        let li = document.createElement('li');
                        let h6_item = document.createElement('h6');
                        h6_item.textContent = item;
                        li.appendChild(h6_item);
                        li.setAttribute("class", "list-group-item");
                        lista.appendChild(li);
                        document.getElementById('textInput').value = "";
                        document.getElementById('textInput').focus();
                    });
                
                }
                
                
            });
        });


