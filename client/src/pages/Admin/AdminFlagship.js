import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message, DatePicker } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminFlagship() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { flagships } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
              response = await axios.post("/api/portfolio/update-flagship", {
                ...values,
                _id: selectedItemForEdit._id,
              });
            } else {
              response = await axios.post("/api/portfolio/add-flagship", values);
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
            const response = await axios.post("/api/portfolio/delete-flagship", {
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
                    Add Event
                </button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
                {flagships.map((flagship) => (
                    <div key={flagship._id} className="shadow border p-5 border-gray-400 flex flex-col">
                        
                        <hr />
                        <h1>Event : {flagship.event}</h1>
                        <h1>Year : {flagship.year}</h1>
                        <h1>College : {flagship.college}</h1>
                        <h1>Role : {flagship.role}</h1>
                        

                        <div className="flex justify-end gap-5 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2 "
                                onClick={() => {
                                    onDelete(flagship);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemForEdit(flagship);
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
                    title={selectedItemForEdit ? "Edit Event" : "Add Event"}
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
                        <Form.Item name="event" label="event">
                            <input placeholder="event" />
                        </Form.Item>
                        <Form.Item name="year" label="year">
                            <input placeholder="year" />
                        </Form.Item>
                        <Form.Item name="venue" label="venue">
                            <input placeholder="venue" />
                        </Form.Item>
                        <Form.Item name="role" label="role">
                            <input placeholder="role" />
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

export default AdminFlagship;
