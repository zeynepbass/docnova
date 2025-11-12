import React from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Row, Col, Divider, Tag, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

export default function DetailsPage() {
  const invoice = useSelector((state) => state.invoice.selectedInvoice);
  const { t } = useTranslation();

  if (!invoice) {
    return <p style={{ textAlign: "center", marginTop: 50 }}>{t("invoiceNotSelected")}</p>;
  }

  const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : "-");

  return (
    <Row justify="center" style={{ marginTop: 20, minHeight: "100vh", paddingBottom: 40 }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Card
          title={
            <Space direction="vertical" size={2}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                {t("invoice")}: {invoice.invoiceNumber}
              </Typography.Title>
              <Typography.Text type="secondary">{formatDate(invoice.issueDate)}</Typography.Text>
            </Space>
          }
          bordered
          hoverable
          style={{
            borderRadius: 12,
            boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            backgroundColor: "rgb(243, 249, 253)",
          }}
        >
          <Card.Meta
            avatar={
              <Avatar
                size={64}
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${invoice.id}`}
              />
            }
            title={<Typography.Title level={5}>{invoice.customerName || "-"}</Typography.Title>}
            description={
              <Typography.Text type="secondary">
                {t("supplier")}: {invoice.supplierName || "-"}
              </Typography.Text>
            }
          />

          <Divider />

          <Row gutter={[16, 12]}>
            <Col span={12}>
              <Typography.Text strong>{t("companyId")}:</Typography.Text>{" "}
              <Typography.Text>{invoice.companyId}</Typography.Text>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("issueDate")}:</Typography.Text>{" "}
              <Typography.Text>{formatDate(invoice.issueDate)}</Typography.Text>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("dueDate")}:</Typography.Text>{" "}
              <Typography.Text>{formatDate(invoice.dueDate)}</Typography.Text>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("status")}:</Typography.Text>{" "}
              <Tag color="blue">{invoice.status}</Tag>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("totalAmount")}:</Typography.Text>{" "}
              <Typography.Text>{invoice.paymentDetails?.totalAmount || 0} €</Typography.Text>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("paymentStatus")}:</Typography.Text>{" "}
              <Tag
                color={
                  invoice.paymentDetails?.paymentStatus === "SENT"
                    ? "green"
                    : invoice.paymentDetails?.paymentStatus === "PENDING"
                    ? "orange"
                    : "red"
                }
              >
                {invoice.paymentDetails?.paymentStatus || "-"}
              </Tag>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("taxInclusiveAmount")}:</Typography.Text>{" "}
              <Typography.Text>{invoice.taxInclusiveAmount} €</Typography.Text>
            </Col>

            <Col span={12}>
              <Typography.Text strong>{t("taxExclusiveAmount")}:</Typography.Text>{" "}
              <Typography.Text>{invoice.taxExclusiveAmount} €</Typography.Text>
            </Col>
          </Row>

          <Divider />

          <p style={{ textAlign: "center", marginTop: 10 }}>
            <Typography.Text type="secondary">
              {t("invoiceSource")}: {invoice.source || "-"}
            </Typography.Text>
          </p>
        </Card>
      </Col>
    </Row>
  );
}
