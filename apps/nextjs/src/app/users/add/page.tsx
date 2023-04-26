export default function Page() {
  async function onSave() {
    console.log("save");
  }

  return (
    <article>
      <form>
        <div className="grid">
          <label>
            User
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="grid">
          <label>
            E-mail
            <input type="text" name="email" required />
          </label>
        </div>

        <button>Save</button>
      </form>
    </article>
  );
}
