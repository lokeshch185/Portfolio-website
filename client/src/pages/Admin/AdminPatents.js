import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message, DatePicker } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminPatents() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { patents } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;
      
      const payload = { ...values, date: values.date.format('YYYY-MM-DD') };

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-patent", {
          ...payload,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-patent", payload);
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
      const response = await axios.post("/api/portfolio/delete-patent", {
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
          Add Patent
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {patents.map((patent) => (
          <div
            key={patent._id}
            className="shadow border p-5 border-gray-400 flex flex-col"
          >
            <h1 className="text-primary text-xl font-bold">
              {patent.title}
            </h1>
            <hr />
            <h1>Authors : {patent.authors}</h1>
            <h1>Organisation : {patent.organisation}</h1>
            <h1>Remarks : {patent.remarks}</h1>
           
            <h1>{moment(patent.date).format('YYYY-MM-DD')}</h1>
            <br></br>

            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(patent);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(patent);
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
            selectedItemForEdit ? "Edit Patent" : "Add Patent"
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
            <Form.Item name="date" label="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="authors" label="Authors">
            <input placeholder="Authors" />
            </Form.Item>
            <Form.Item name="organisation" label="Organisation">
            <input placeholder="Organisation" />
            </Form.Item>
            <Form.Item name="remarks" label="Remarks">
            <input placeholder="Remarks" />
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

export default AdminPatents;
