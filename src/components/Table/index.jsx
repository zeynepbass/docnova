
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoices, setSelectedInvoice } from "../../redux/invoiceSlice";
import { Table, Button, Tag } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function InvoiceTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { invoices, loading, error } = useSelector((state) => state.invoice);
  const { user, companies, jwt } = useSelector((state) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    if (user && companies?.length > 0) {
      dispatch(
        fetchInvoices({
          companyId: companies[0].id,
          jwt: jwt,
          startDate: "2025-06-27T00:00:00.000Z",
          endDate: "2025-07-04T08:31:10.422Z",
          documentType: "OUTGOING",
          page: 0,
          size: 20,
          referenceDocument: "",
          type: null,
          status: null,
          paymentStatus: null,
          isDeleted: false,
        })
      );
    }
  }, [user, companies, dispatch, jwt]);

  const handleDetails = (record) => {
    dispatch(setSelectedInvoice(record));
    navigate("/details");
  };

  if (loading) return <p style={{ textAlign: "center", color: "gray" }}>{t("loading")}</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{t("error")}</p>;

  const columns = [
    {
      title: t("companyId"),
      dataIndex: "companyId",
      key: "companyId",
      render: (text) => text?.slice(0, 6) || "-",
      width: 100,
      align: "center",
    },
    {
      title: t("customer"),
      dataIndex: "customerName",
      key: "customerName",
      width: 200,
      align: "center",
    },
    {
      title: t("invoiceNo"),
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
      width: 150,
      align: "center",
    },
    {
      title: t("issueDate"),
      dataIndex: "issueDate",
      key: "issueDate",
      render: (text) => (text ? new Date(text).toLocaleDateString() : "-"),
      align: "center",
    },
    {
      title: t("dueDate"),
      dataIndex: "dueDate",
      key: "dueDate",
      render: (text) => (text ? new Date(text).toLocaleDateString() : "-"),
      align: "center",
    },
    {
      title: t("amount"),
      key: "totalAmount",
      render: (_, record) => (
        <span style={{ fontWeight: 600, color: "#1890ff" }}>
          {record.paymentDetails?.totalAmount || 0} €
        </span>
      ),
      align: "center",
    },
    {
      title: t("status"),
      key: "paymentStatus",
      render: (_, record) => {
        const status = record.paymentDetails?.paymentStatus;
        let color = "default";
        if (status === "SENT") color = "green";
        else if (status === "PENDING") color = "orange";
        else if (status === "FAILED") color = "red";
        return <Tag color={color}>{status || "-"}</Tag>;
      },
      align: "center",
    },
    {
      title: t("actions"),
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<InfoCircleOutlined />}
          onClick={() => handleDetails(record)}
          style={{ width: "100%", height: 50, fontSize: 16 }}
        >
          {t("details")}
        </Button>
      ),
      align: "center",
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={invoices?.invoices?.content || []}
      columns={columns}
      pagination={{ pageSize: 5 }}
      bordered
      size="middle"
      scroll={{ x: 1200 }}
    />
  );
}
