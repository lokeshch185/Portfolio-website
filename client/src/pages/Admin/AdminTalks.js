import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message , DatePicker} from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminTalks() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { talks } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            
            let response;
            const payload = { ...values, date: values.date.format('YYYY-MM-DD') };

            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-talk", {
                    ...payload,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-talk", payload);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-talk", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div>
            <div className="flex justify-end">
                <button
                    className="bg-primary px-5 py-2 text-white"
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowAddEditModal(true);
                    }}
                >
                    Add Talk
                </button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
                {talks.map((talk) => (
                    <div key={talk._id} className="shadow border p-5 border-gray-400 flex flex-col">
                        <h1 className="text-primary text-xl font-bold">
                            {talk.title}
                        </h1>
                        <hr />
                        <h1>Type of audience : {talk.type_of_audience}</h1>
                        <h1>Number of audience : {talk.number}</h1>
                        <h1>Name of Organisation : {talk.org_name}</h1>
                        <h1>{moment(talk.date).format('YYYY-MM-DD')}</h1>
                        <br></br>
                        <h1>{talk.remark}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2 "
                                onClick={() => {
                                    onDelete(talk);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemForEdit(talk);
                                    setShowAddEditModal(true);
                                    setType("edit");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {(type === "add" || selectedItemForEdit) && (
                <Modal
                    visible={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Talk" : "Add Talk"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemForEdit(null);
                    }}
                >
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            ...selectedItemForEdit,
                            date: selectedItemForEdit ? moment(selectedItemForEdit.date) : null
                        }}
                    >
                        <Form.Item name="title" label="Title">
                            <input placeholder="Title" />
                        </Form.Item>
                        <Form.Item name="type_of_audience" label="Type of Audience">
                            <input placeholder="Type of Audience" />
                        </Form.Item>
                        <Form.Item name="number" label="Number of people">
                            <input placeholder="Number of people" />
                        </Form.Item>
                        <Form.Item name="org_name" label="Organisation Name">
                            <input placeholder="Organisation Name" />
                        </Form.Item>
                        <Form.Item name="remark" label="Remark">
                            <input placeholder="Remark" />
                        </Form.Item>
                        <Form.Item name="date" label="Date">
                            <DatePicker />
                        </Form.Item>

                        <div className="flex justify-end">
                            <button
                                className="border-primary text-primary px-5 py-2"
                                onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemForEdit(null);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="bg-primary text-white px-5 py-2">
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                        </div>
                    </Form>
                </Modal>
            )}
        </div>
    );
}

export default AdminTalks;
