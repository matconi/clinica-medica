
    const del = document.querySelectorAll('.del-btn');
    console.log(del);
    
    for (const confirms of del) {
        const confirm_ = confirms.addEventListener('click', () => {
            confirm('Deseja excluir o funcionário?')
        
            if (confirm_ == true) {
                alert('Funcionário excluído!')
            }
        });
    }

