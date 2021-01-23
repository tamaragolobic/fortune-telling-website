import React from 'react';

const kontakt = () => {
    return (
        <div className="fullScreenLayout">
            <div>
                <h4>
                    Pošljite sporočilo
                </h4>
                <form>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ime"
                            name="username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="E-pošta"
                            name="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder='Sporočilo'
                            className='form-control message'
                            rows='10'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-outline-success btn-block"
                            type="submit"
                            value="Pošlji"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default kontakt;