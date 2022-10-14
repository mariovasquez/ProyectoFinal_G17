const Form = () => {
  return (
    <div className="contact__form">
      <h2 className="contact__title ">Contáctanos</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida urna erat.</p>
      <form className="contact__form">
        <label htmlFor="nombre">
          <input className="contact__input" type="text" name="fname" placeholder="Nombre" id="nombre" required />
        </label>
        <label htmlFor="apellido">
          <input className="contact__input" type="text" name="lname" placeholder="Apellido" id="apellido" required />
        </label>
        <label htmlFor="correo">
          <input className="contact__input" type="email" name="lname" placeholder="ejemplo@gmail.com" id="correo" required />
        </label>
        <label htmlFor="telefono">
          <input className="contact__input" type="number" name="tel" placeholder="999666333" id="telefono" required />
        </label>
        <label htmlFor="asunto">
          <textarea className="contact__input" name="message" rows="3" placeholder="Asunto" id="asunto" required />
        </label>
        <button className="contact__button" type="submit">Enviar</button>
      </form>

    </div>
  );
}

export default Form;