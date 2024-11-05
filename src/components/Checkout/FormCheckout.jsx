const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="fullname">Nombre Completo</label>
                <input type="text" name="fullname" id="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

                <label htmlFor="phone">Celular</label>
                <input type="number" name="phone" id="phone" value={dataForm.phone} onChange={handleChangeInput} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={dataForm.email} onChange={handleChangeInput} />

                <button type="submit">Realizar compra</button>
            </form>
        </div>
    );
}

export default FormCheckout;
