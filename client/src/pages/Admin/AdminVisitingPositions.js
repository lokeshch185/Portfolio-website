import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message} from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminVisitingPositions() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { visitingpositions } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      if (selectedItemForEdit) {
        // Update existing visiting position
        response = await axios.post("/api/portfolio/update-visitingposition", {
          _id: selectedItemForEdit._id,
          ...values,
        });
      } else {
        // Add new visiting position
        response = await axios.post("/api/portfolio/add-visitingposition", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
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
      const response = await axios.post("/api/portfolio/delete-visitingposition", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
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
          Add Visiting faculty Position
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {visitingpositions && visitingpositions.map((visitingposition) => (
          <div
            key={visitingposition._id}
            className="shadow border p-5 border-gray-400 flex flex-col"
          >
            <h1 className="text-primary text-xl font-bold">
              {visitingposition.institute}
            </h1>
            <hr />
            <h1>Course : {visitingposition.course}</h1>
            <h1>Tenure: {visitingposition.tenure}</h1>
            

            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(visitingposition);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary px-5 py-2 text-white"
                onClick={() => {
                  setSelectedItemForEdit(visitingposition);
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
            selectedItemForEdit ? "Edit Visiting faculty Position" : "Add Visiting faculty Position"
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
              institute: selectedItemForEdit ? selectedItemForEdit.institute : "",
              course: selectedItemForEdit ? selectedItemForEdit.course : "",
              tenure: selectedItemForEdit ? selectedItemForEdit.tenure : "",
            }}
          >
            <Form.Item name="institute" label="Institute">
              <input placeholder="name of institute" />
            </Form.Item>
            <Form.Item name="course" label="Course">
              <input placeholder="name of course" />
            </Form.Item>
            <Form.Item name="tenure" label="Tenure">
              <input placeholder="tenure" />
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
              <button className="bg-primary text-white px-5 py-2" htmlType="submit">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminVisitingPositions;
