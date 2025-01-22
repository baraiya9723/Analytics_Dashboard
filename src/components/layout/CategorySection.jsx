// src/components/layout/CategorySection.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import Section from "./Section";
import Card from "./Card";
import styles from "./CategorySection.module.css";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import DataTable from "../tables/DataTable"
import SummaryDataTable from "../tables/SummaryDataTable";
const CategorySection = ({
  title,
  filterData,
  data,
  columns,
  calculateSummaryData,
  category,
  children,
  charts = false,
}) => {
  return (
    <Section className={styles.categorySection}>
      <Section>
        <Card className={styles.categoryTitle}>
         <h2 className={styles.categoryTitle}>{title}</h2>
        <div className={styles.filters}>{children}</div>
        </Card>
      </Section>
      <Section>
        <Card>
          {
            <div>
              {data && (
                <Card>{<DataTable columns={columns} data={data} />}</Card>
              )}
            </div>
          }
        </Card>
      </Section>
      {charts && data && data.length > 0 && (
        <>
          <Section>
            <Row className={styles.chartContainer}>
              <Col md={4} className={styles.chart}>
                <Card>
                  <BarChart
                    data={data?.map((item) => item.totalPaid)}
                    labels={data?.map((item) => item.item)}
                    title={`Total Paid by ${title}`}
                  />
                </Card>
              </Col>
              <Col md={4} className={styles.chart}>
                <Card>
                  <LineChart
                    data={data?.map((item) => item.riskScore)}
                    labels={data?.map((item) => item.item)}
                    title={`Risk Score by ${title}`}
                  />
                </Card>
              </Col>
              <Col md={4} className={styles.chart}>
                <Card>
                  <PieChart
                    data={data?.map((item) => item.claims)}
                    labels={data?.map((item) => item.item)}
                    title={`Claims by ${title}`}
                  />
                </Card>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row className={styles.chartContainer}>
              <Col md={12} className={styles.chart}>
                <Card>
                  <BarChart
                    data={data?.map((item) => item.claims)}
                    labels={data?.map((item) => item.item)}
                    title={`Claims Analysis by ${title}`}
                  />
                </Card>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row className={styles.chartContainer}>
              <Col md={12} className={styles.chart}>
                <Card>
                  <BarChart
                    data={data?.map((item) => item.riskScore)}
                    labels={data?.map((item) => item.item)}
                    title={`Risk Score Analysis by ${title}`}
                  />
                </Card>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row className={styles.chartContainer}>
              <Col md={12} className={styles.chart}>
                <Card>
                {data && (
                <SummaryDataTable data = {calculateSummaryData(data)}/>
              )}
                </Card>
              </Col>
            </Row>
          </Section>
        </>
      )}
    </Section>
  );
};

export default CategorySection;
