import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message, DatePicker } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import moment from "moment";

function AdminFundedProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { fprojects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      let response;

      const payload = {
        ...values,
        tenureto: values.tenurefrom.format("YYYY-MM-DD"), tenureto: values.tenureto.format("YYYY-MM-DD") 
      };

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-fprojects", {
          ...payload,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-fprojects", payload);
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
      const response = await axios.post("/api/portfolio/delete-fprojects", {
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
          Add Funded Projects
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {fprojects.map((fproject) => (
          <div key={fproject._id} className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-primary text-xl font-bold">
              {fproject.title}
            </h1>
            <hr />
            {/* <h1>Group : {fproject.studentgrp}</h1>
            <h1>Link : {fproject.absvideolink}</h1> */}
            <h1>Amount : {fproject.amtfunded}</h1>
            <h1>Funding agency name : {fproject.fundingagencyname}</h1>
            <h1>From : {moment(fproject.tenurefrom).format('YYYY-MM-DD')}</h1> 
            <h1>To : {moment(fproject.tenureto).format('YYYY-MM-DD')}</h1>
            {/* <h1>{fproject.remark}</h1> */}
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(fproject);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(fproject);
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
          title={selectedItemForEdit ? "Edit Funded Projects" : "Add Funded Projects"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{...selectedItemForEdit,
                 tenurefrom: selectedItemForEdit ? moment(selectedItemForEdit.tenurefrom): null,
                tenureto: selectedItemForEdit ? moment(selectedItemForEdit.tenureto) : null,}}
          >
            <Form.Item name="title" label="title">
              <input placeholder="title" />
            </Form.Item>
            {/* <Form.Item name="studentgrp" label="student abstract video link">
              <input placeholder="student abstract video link" />
            </Form.Item>
            <Form.Item name="absvideolink" label="abstract video link">
              <input placeholder="abstract video link" />
            </Form.Item>
            <Form.Item name="photo" label="photo">
              <input placeholder="photo" />
            </Form.Item> */}
            <Form.Item name="fundingagencyname" label="funding agency name">
              <input placeholder="funding agency name" />
              </Form.Item>
              <Form.Item name="amtfunded" label="amount funded">
              <input placeholder="amount funded" />
            </Form.Item>
            <Form.Item name="tenurefrom" label="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item name="tenureto" label="Date">
                <DatePicker />
            </Form.Item>
            {/* <Form.Item name="remark" label="remark">
              <input placeholder="remark" />
            </Form.Item> */}

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

export default AdminFundedProjects;
