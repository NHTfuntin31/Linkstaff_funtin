// import { Container } from "./News"
// import { Content } from "./News"
import { FooterContainer } from "../GlobalStyle";
interface ResumeProps {
  nameKana: string;
  name: string;
  birthday: string;
  gender: string;
}

function Resume() {
  return (
    <>
      <FooterContainer>
        {/* <Content> */}
        <h1>Resume</h1>
        <body>
          <div style={{ backgroundColor: "#fff", textAlign: "left" }}>
            <table
              className="tbl"
              cellSpacing="0"
              cellPadding="51"
              width="595.5"
              style={{
                padding: "68px",
                width: "794px",
                backgroundColor: "#fff",
              }}
            >
              <tr>
                <td align="left">
                  <table cellSpacing="0" cellPadding="0">
                    <tr>
                      <td align="left" width="340.5" style={{ width: "454px" }}>
                        <table cellSpacing="0" cellPadding="0">
                          <tr>
                            <td
                              align="left"
                              height="34.25"
                              width="150"
                              style={{
                                height: "43px",
                                width: "200px",
                                fontSize: "18pt",
                                letterSpacing: "18pt",
                                lineHeight: "32.25pt",
                              }}
                            >
                              履歴書
                            </td>
                            <td
                              align="right"
                              height="34.25"
                              width="190.5"
                              style={{ height: "43px", width: "254px" }}
                            >
                              <table cellSpacing="0" cellPadding="0">
                                <tr>
                                  <td
                                    height="7"
                                    style={{
                                      height: "9.33px",
                                      lineHeight: "7pt",
                                      fontSize: "0",
                                    }}
                                  ></td>
                                </tr>
                                <tr>
                                  <td
                                    className="fld"
                                    data-name="1.creatdate_year"
                                    height="27.25"
                                    style={{
                                      height: "33.67px",
                                      lineHeight: "25.25pt",
                                    }}
                                  >
                                    2023年7月10日現在
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <table
                                cellSpacing="0"
                                width="337.5"
                                style={{ width: "450px" }}
                              >
                                <tr>
                                  <td
                                    className="dot_bt sld_lft sld_tp"
                                    height="20.75"
                                    width="63"
                                    style={{
                                      borderLeft: "1px solid #000",
                                      borderTop: "1px solid #000",
                                      fontSize: "10pt",
                                      height: "25px",
                                      width: "84px",
                                      lineHeight: "18.75pt",
                                    }}
                                  >
                                    &nbsp;ふりがな
                                  </td>
                                  <td
                                    className="fld fldpt dot_bt sld_rgt sld_tp"
                                    data-name="1.namekana_sei"
                                    height="20.75"
                                    width="274.5"
                                    style={{
                                      borderRight: "1px solid #000",
                                      borderTop: "1px solid #000",
                                      fontSize: "10pt",
                                      height: "25px",
                                      width: "366px",
                                      lineHeight: "18.75pt",
                                    }}
                                  >
                                    ユオン ティエン
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="sld_lft"
                                    height="51.5"
                                    width="63"
                                    style={{
                                      borderLeft: "1px solid #000",
                                      fontSize: "10pt",
                                      height: "70px",
                                      width: "84px",
                                      lineHeight: "51.5pt",
                                    }}
                                  >
                                    &nbsp;名前
                                  </td>
                                  <td
                                    className="fld fldpt sld_rgt"
                                    data-name="1.name_sei"
                                    height="51.5"
                                    width="274.5"
                                    style={{
                                      borderRight: "1px solid #000",
                                      fontSize: "15.75pt",
                                      height: "70px",
                                      width: "366px",
                                      lineHeight: "51.5pt",
                                    }}
                                  >
                                    Duong Tien
                                  </td>
                                </tr>

                                
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </body>
        {/* </Content> */}
      </FooterContainer>
    </>
  );
}

export default Resume;
