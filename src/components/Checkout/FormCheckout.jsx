const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <div className="container-xxl w-50 px-5 py-4">
            <form onSubmit={handleSubmitForm} className="row g-4">
                <div className="col-6">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input className="form-control" type="text" name="name" id="name" value={dataForm.name} onChange={handleChangeInput} />
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="surname">Apellido</label>
                    <input className="form-control" type="text" name="surname" id="surname" value={dataForm.surname} onChange={handleChangeInput} />
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="phone">Celular</label>
                    <input className="form-control" type="number" name="phone" id="phone" value={dataForm.phone} onChange={handleChangeInput} />
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" value={dataForm.email} onChange={handleChangeInput} />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="adress">Dirección</label>
                    <input className="form-control" type="text" name="adress" id="adress" value={dataForm.adress} onChange={handleChangeInput} />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="dni">DNI</label>
                    <input className="form-control" type="number" name="dni" id="dni" value={dataForm.dni} onChange={handleChangeInput} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Realizar compra</button>
                </div>
            </form>
        </div>
    );
}

export default FormCheckout;
