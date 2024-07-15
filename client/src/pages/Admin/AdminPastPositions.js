import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message, DatePicker } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminPastPositions() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { pastpositions } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;
      
      const payload = { ...values, tenureto: values.tenureto.format("YYYY-MM-DD"), tenureto: values.tenureto.format("YYYY-MM-DD") };

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-pastposition", {
          ...payload,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-pastposition", payload);
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
      const response = await axios.post("/api/portfolio/delete-pastposition", {
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
          Add Past Position
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {pastpositions.map((pastposition) => (
          <div
            key={pastposition._id}
            className="shadow border p-5 border-gray-400 flex flex-col"
          >
            <h1 className="text-primary text-xl font-bold">
              {pastposition.position}
            </h1>
            <hr />
            <h1>Department : {pastposition.department}</h1>
            <h1>
              From : {moment(pastposition.tenurefrom).format("YYYY-MM-DD")}
            </h1>
            <h1>To : {moment(pastposition.tenureto).format("YYYY-MM-DD")}</h1>
            <br></br>

            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(pastposition);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(pastposition);
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
          title={
            selectedItemForEdit ? "Edit Past Position" : "Add Past Position"
          }
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
              date: selectedItemForEdit
                ? moment(selectedItemForEdit.date)
                : null,
            }}
          >
            <Form.Item name="position" label="Position">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="department" label="Department">
              <input placeholder="Department" />
            </Form.Item>

            <Form.Item name="tenurefrom" label="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item name="tenureto" label="Date">
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

export default AdminPastPositions;
