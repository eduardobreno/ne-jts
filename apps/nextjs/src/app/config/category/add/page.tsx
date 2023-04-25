export default function Page() {
  async function onSave() {
    console.log("save");
  }

  return (
    <article>
      <form>
        <div className="grid">
          <label htmlFor="firstname">
            Categoria
            <input type="text" name="name" placeholder="Ex: Food" required />
          </label>
        </div>

        <button>Salvar</button>
      </form>
    </article>
  );
}
