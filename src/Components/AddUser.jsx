import React from 'react'

const AddUser = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5 className='mb-4 mt-4'>Adduser</h5>
                    <form>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="col-sm-2">User Name</label>
                            <input type="text" name='username' class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="col-sm-2">Email</label>
                            <input type="text" name='useremail' class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="col-sm-2">Status</label>
                            <select name='status' className='form-control' >
                                <option value="">--Select status</option>
                                <option value="1">Active </option>
                                <option value="0">Inactive </option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser