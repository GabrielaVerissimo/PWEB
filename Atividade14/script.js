document.getElementById('rdb1').checked = true;

        function limpar() {
            document.formulario.elements[0].value = '';
            document.formulario.elements[1].value = '';
            document.getElementById('comment').value = 'Insira seu comentário aqui';
            document.getElementById('rdb1').checked = true;
        }



        function desmarcar1() {
            document.getElementById('rdb1').checked = false;
        }

        function desmarcar2() {
            document.getElementById('rdb2').checked = false;
        }


        function validar() {
            var name = document.formulario.elements[0].value;
            var email = document.formulario.elements[1].value;
            var comentario = document.getElementById('comment').value;

            if (name.length < 3) {
                alert("Nome inválido");
                return;
            }
            if (!email.includes("@", 0) && !email.includes('.', 0)) {
                alert('E-mail inválido');
                return;
            }
            if (comentario.length < 3) {
                alert('Comentário inválido');
                return;
            }

            if (document.getElementById('rdb1').checked == true) {
                alert('Volte sempre à esta página!');
            } else {
                alert('Que bom que você voltou a visitar esta página!');
            }
        }
