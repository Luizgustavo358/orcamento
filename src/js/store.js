export default class storeGenerica {
    constructor(chave) {
        this.chave = chave;
    }

    listar = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const itens = localStorage.getItem(this.chave);

                if(!itens) {
                    resolve([]);
                    return;
                }

                resolve(JSON.parse(itens));
            }, 400);
        });
    }

    salvar = (itens) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem(this.chave, JSON.stringify(itens));
                resolve();
            }, 400);
        });
    }
}