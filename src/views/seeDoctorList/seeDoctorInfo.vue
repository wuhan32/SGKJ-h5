<template>
  <div class="firstExamine">
    <v-header>
      <div slot="body" class="header-body">
        <p>
          <span>姓名:{{ clickList.name }}</span>
          <span>性别:{{ sex[clickList.sex] }}</span>
        </p>
        <p>
          <span>病例号:{{ clickList.patientId }}</span>
          <span>年龄:{{ clickList.age }}</span>
        </p>
      </div>
    </v-header>

    <main>
      <van-tabs type="card" @click="onClick">
        <van-tab title="右眼">
          <span>电脑验光</span>
          <ul class="main-one">
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightEyeball"
                label="球镜"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightColumnMirror"
                label="柱镜"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightAxialDirection"
                label="轴向"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightKF"
                label="KF"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightKS"
                label="KS"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightkValue"
                label="K值"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightCYL"
                label="CYL"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightAX"
                label="AX"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightAVG"
                label="AVG"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightROCS"
                label="ROCS"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOD.inputList.rightROCF"
                label="ROCF"
              />
            </li>
            <li></li>
          </ul>
          <span>眼压</span>
          <ul class="main-one">
            <li>
              <van-field
                v-model="inputList.intraPresOD.inputList.rightIPO1"
                label="早上"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOD.inputList.rightIPO2"
                label="上午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOD.inputList.rightIPO3"
                label="中午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOD.inputList.rightIPO4"
                label="下午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOD.inputList.rightIPO5"
                label="晚上"
                :disabled="disabled"

              />
            </li>
          </ul>
          <span class="titie-top">综合验光</span>
          <ul class="main-top">
            <li class="main-top-one">
              <span class="main-top-tab">视近</span>
              <span class="main-top-tab">视远</span>
              <!-- <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightTeleopsia1"
              >
                <option value="rightTeleopsia">视远</option>
                <option value="rightNearVision">视近</option>
                <option value="rightCheckMirror">镜止</option>
              </select>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightTeleopsia2"
              >
                <option value="rightTeleopsia1">视远</option>
                <option value="rightNearVision1">视近</option>
                <option value="rightNearVision1">镜止</option>
              </select> -->
            </li>
            <li>
              <!-- <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightFrame"
              >
                <option value="rightFrame">框架</option>
                <option value="rightSoftLenses ">软镜</option>
                <option value="rightRGP">RGP</option>
                <option value="rightCircularCone">圆锥</option>
                <option value="rightLaser">激光</option>
                <option value="rightICL">ICL</option>
              </select> -->
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightTeleopsia1
                  "
                  label="矫视"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightTeleopsia2
                  "
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightNakedLook"
                  label="裸视"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightNakedLook1
                  "
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightSph"
                  label="球镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightSph1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightColumnMirror
                  "
                  label="柱镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightColumnMirror1
                  "
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightAxialView"
                  label="轴位"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightAxialView1
                  "
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightLingMirror
                  "
                  label="棱镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOD.inputList.rightLingMirror1
                  "
                />
              </div>
            </li>
            <li>
              <span>底向</span>
              <div>
                <select
                  name
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightEndThe"
                >
                  <option value="rightBI">BI</option>
                  <option value="rightBO">BO</option>
                  <option value="rightBU">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
              <div>
                <select
                  name
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightEndThe1"
                >
                  <option value="rightBI1">BI</option>
                  <option value="rightBO1">BO</option>
                  <option value="rightBU1">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  label="视力"
                  v-model="inputList.optometryDetailOD.inputList.rightVision"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOD.inputList.rightVision1"
                />
              </div>
            </li>
          </ul>
          <p class="title">诊断</p>
          <ul class="main-buttom">
            <li>
              <span>立体</span>
              <select
                name
                :disabled="disabled"
                v-model="
                  inputList.optometryDetailOD.inputList.rightStereoscopic
                "
              >
                <option value="rightStereoscopic1">正常</option>
                <option value="rightStereoscopic2">异常</option>
                <option value="rightStereoscopic3">没有</option>
              </select>
            </li>
            <li>
              <span>融合</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOD.inputList.rightFuse"
              >
                <option value="rightFuse1">正常</option>
                <option value="rightFuse2">异常</option>
                <option value="rightFuse3">参差</option>
                <option value="rightFuse4">没有</option>
              </select>
            </li>
            <li>
              <span>色觉</span>
              <select
                name
                :disabled="disabled"
                v-model="
                  inputList.optometryDetailOD.inputList.rightColourVision
                "
              >
                <option value="rightColourVision0">正常</option>
                <option value="rightColourVision1">异常</option>
                <option value="rightColourVision2">红弱</option>
                <option value="rightColourVision3">绿弱</option>
                <option value="rightColourVision4">蓝弱</option>
                <option value="rightColourVision5">黄弱</option>
                <option value="rightColourVision6">色弱</option>
                <option value="rightColourVision7">色盲</option>
              </select>
            </li>
            <li>
              <span>红绿</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOD.inputList.rightRedGreen"
              >
                <option value="rightRedGreen1">正常</option>
                <option value="rightRedGreen2">异常</option>
                <option value="rightRedGreen3">平衡</option>
                <option value="rightRedGreen4">红强</option>
                <option value="rightRedGreen5">绿强</option>
                <option value="rightRedGreen6">其他</option>
              </select>
            </li>
            <li>
              <span>散瞳</span>
              <select
                name
                v-model="inputList.optometryDetailOD.inputList.rightMydriasis"
              >
                <option value="rightMydriasis1">是</option>
                <option value="rightMydriasis2">否</option>
              </select>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOD.inputList.rightCentrometer"
                label="瞳距"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOD.inputList.rightPupilHigh"
                label="瞳高"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOD.inputList.rightADD"
                label="ADD"
              />
              <p>mm</p>
            </li>
          </ul>

          <!-- <span class="titie-top">复光</span>
          <ul class="main-top">
            <li class="main-top-one">
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.rightTeleopsia1"
              >
                <option value="rightTeleopsia">视远</option>
                <option value="rightNearVision">视近</option>
                <option value="rightCheckMirror">镜止</option>
              </select>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.rightTeleopsia2"
              >
                <option value="rightTeleopsia1">视远</option>
                <option value="rightNearVision1">视近</option>
                <option value="rightNearVision1">镜止</option>
              </select>
            </li>
            <li>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.rightFrame"
              >
                <option value="rightFrame">框架</option>
                <option value="rightSoftLenses ">软镜</option>
                <option value="rightRGP">RGP</option>
                <option value="rightCircularCone">圆锥</option>
                <option value="rightLaser">激光</option>
                <option value="rightICL">ICL</option>
              </select>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.value1"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.value2"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightNakedLook"
                  label="裸视"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightNakedLook1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightSph"
                  label="棱"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightSph1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightColumnMirror"
                  label="柱镜"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightColumnMirror1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightAxialView"
                  label="轴位"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightAxialView1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightLingMirror"
                  label="棱镜"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightLingMirror1"
                />
              </div>
            </li>
            <li>
              <span>底向</span>
              <div>
                <select name :disabled="disabled" v-model="inputList.overOptomty.rightEndThe">
                  <option value="rightBI">BI</option>
                  <option value="rightBO">BO</option>
                  <option value="rightBU">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
              <div>
                <select name :disabled="disabled" v-model="inputList.overOptomty.rightEndThe1">
                  <option value="rightBI1">BI</option>
                  <option value="rightBO1">BO</option>
                  <option value="rightBU1">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  label="视力"
                  v-model="inputList.overOptomty.rightVision"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightVision1"
                />
              </div>
            </li>
          </ul> -->
          <!-- <p class="title">诊断</p>
          <ul class="main-buttom">
            <li>
              <span>立体</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightStereoscopic">
                <option value="rightStereoscopic1">正常</option>
                <option value="rightStereoscopic2">异常</option>
                <option value="rightStereoscopic3">没有</option>
              </select>
            </li>
            <li>
              <span>融合</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightFuse">
                <option value="rightFuse1">正常</option>
                <option value="rightFuse2">异常</option>
                <option value="rightFuse3">参差</option>
                <option value="rightFuse4">没有</option>
              </select>
            </li>
            <li>
              <span>色觉</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightColourVision ">
                <option value="rightColourVision0">正常</option>
                <option value="rightColourVision1">异常</option>
                <option value="rightColourVision2">红弱</option>
                <option value="rightColourVision3">绿弱</option>
                <option value="rightColourVision4">蓝弱</option>
                <option value="rightColourVision5">黄弱</option>
                <option value="rightColourVision6">色弱</option>
                <option value="rightColourVision7">色盲</option>
              </select>
            </li>
            <li>
              <span>红绿</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightRedGreen ">
                <option value="rightRedGreen1">正常</option>
                <option value="rightRedGreen2">异常</option>
                <option value="rightRedGreen3">平衡</option>
                <option value="rightRedGreen4">红强</option>
                <option value="rightRedGreen5">绿强</option>
                <option value="rightRedGreen6">其他</option>
              </select>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightCentrometer"
                label="瞳距"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightPupilHigh"
                label="瞳高"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightADD"
                label="ADD"
              />
              <p>mm</p>
            </li>
          </ul> -->
        </van-tab>
        <van-tab title="左眼">
          <span>电脑验光</span>
          <ul class="main-one">
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftEyeball"
                label="球镜"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftColumnMirror"
                label="柱镜"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftAxialDirection"
                label="轴向"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftKF"
                label="KF"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftKS"
                label="KS"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftkValue"
                label="K值"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftCYL"
                label="CYL"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftAX"
                label="AX"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftAVG"
                label="AVG"
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftROCS"
                label="ROCS"
                required
              />
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.pcOptometyOS.inputList.leftROCF"
                label="ROCF"
                required
              />
            </li>
            <li></li>
          </ul>
          <span>眼压</span>
          <ul class="main-one">
            <li>
              <van-field
                v-model="inputList.intraPresOS.inputList.leftIPO1"
                label="早上"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOS.inputList.leftIPO2"
                label="上午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOS.inputList.leftIPO3"
                label="中午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOS.inputList.leftIPO4"
                label="下午"
                :disabled="disabled"

              />
            </li>
            <li>
              <van-field
                v-model="inputList.intraPresOS.inputList.leftIPO5"
                label="晚上"
                :disabled="disabled"

              />
            </li>
          </ul>
          <span class="titie-top">综合验光</span>
          <ul class="main-top">
            <li class="main-top-one">
              <span class="main-top-tab">视近</span>
              <span class="main-top-tab">视远</span>
              <!-- <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightTeleopsia1"
              >
                <option value="rightTeleopsia">视远</option>
                <option value="rightNearVision">视近</option>
                <option value="rightCheckMirror">镜止</option>
              </select>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightTeleopsia2"
              >
                <option value="rightTeleopsia1">视远</option>
                <option value="rightNearVision1">视近</option>
                <option value="rightNearVision1">镜止</option>
              </select> -->
            </li>
            <li>
              <!-- <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.optometryDetail.rightFrame"
              >
                <option value="rightFrame">框架</option>
                <option value="rightSoftLenses ">软镜</option>
                <option value="rightRGP">RGP</option>
                <option value="rightCircularCone">圆锥</option>
                <option value="rightLaser">激光</option>
                <option value="rightICL">ICL</option>
              </select> -->
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftTeleopsia1"
                  label="矫视"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftTeleopsia2"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftNakedLook"
                  label="裸视"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftNakedLook1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftSph"
                  label="球镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftSph1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOS.inputList.leftColumnMirror
                  "
                  label="柱镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOS.inputList.leftColumnMirror1
                  "
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftAxialView"
                  label="轴位"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftAxialView1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftLingMirror"
                  label="棱镜"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="
                    inputList.optometryDetailOS.inputList.leftLingMirror1
                  "
                />
              </div>
            </li>
            <li>
              <span>底向</span>
              <div>
                <select
                  name
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftEndThe"
                >
                  <option value="leftBI">BI</option>
                  <option value="leftBO">BO</option>
                  <option value="leftBU">BU</option>
                  <option value="leftBD">BD</option>
                </select>
              </div>
              <div>
                <select
                  name
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftEndThe1"
                >
                  <option value="leftBI1">BI</option>
                  <option value="leftBO1">BO</option>
                  <option value="leftBU1">BU</option>
                  <option value="leftBD">BD</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <van-field
                  :disabled="disabled"
                  label="视力"
                  v-model="inputList.optometryDetailOS.inputList.leftVision"
                />
              </div>
              <div>
                <van-field
                  :disabled="disabled"
                  v-model="inputList.optometryDetailOS.inputList.leftVision1"
                />
              </div>
            </li>
          </ul>
          <p class="title">诊断</p>
          <ul class="main-buttom">
            <li>
              <span>立体</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftStereoscopic"
              >
                <option value="leftStereoscopic1">正常</option>
                <option value="leftStereoscopic2">异常</option>
                <option value="leftStereoscopic3">没有</option>
              </select>
            </li>
            <li>
              <span>融合</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftFuse"
              >
                <option value="leftFuse1">正常</option>
                <option value="leftFuse2">异常</option>
                <option value="leftFuse3">参差</option>
                <option value="leftFuse4">没有</option>
              </select>
            </li>
            <li>
              <span>色觉</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftColourVision"
              >
                <option value="leftColourVision0">正常</option>
                <option value="leftColourVision1">异常</option>
                <option value="leftColourVision2">红弱</option>
                <option value="leftColourVision3">绿弱</option>
                <option value="leftColourVision4">蓝弱</option>
                <option value="leftColourVision5">黄弱</option>
                <option value="leftColourVision6">色弱</option>
                <option value="leftColourVision7">色盲</option>
              </select>
            </li>
            <li>
              <span>红绿</span>
              <select
                name
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftRedGreen"
              >
                <option value="leftRedGreen1">正常</option>
                <option value="leftRedGreen2">异常</option>
                <option value="leftRedGreen3">平衡</option>
                <option value="leftRedGreen4">红强</option>
                <option value="leftRedGreen5">绿强</option>
                <option value="leftRedGreen6">其他</option>
              </select>
            </li>
            <li>
              <span>散瞳</span>
              <select
                name
                v-model="inputList.optometryDetailOS.inputList.leftMydriasis"
              >
                <option value="leftMydriasis1">是</option>
                <option value="leftMydriasis2">否</option>
              </select>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftCentrometer"
                label="瞳距"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftPupilHigh"
                label="瞳高"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                :disabled="disabled"
                v-model="inputList.optometryDetailOS.inputList.leftADD"
                label="ADD"
              />
              <p>mm</p>
            </li>
          </ul>

          <!-- <span class="titie-top">复光</span>
          <ul class="main-top">
            <li class="main-top-one">
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.leftTeleopsia1"
              >
                <option value="rightTeleopsia">视远</option>
                <option value="rightNearVision">视近</option>
                <option value="rightCheckMirror">镜止</option>
              </select>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.rightTeleopsia2"
              >
                <option value="rightTeleopsia1">视远</option>
                <option value="rightNearVision1">视近</option>
                <option value="rightNearVision1">镜止</option>
              </select>
            </li>
            <li>
              <select
                name
                :disabled="disabled"
                class="main-top-tab"
                v-model="inputList.overOptomty.rightFrame"
              >
                <option value="rightFrame">框架</option>
                <option value="rightSoftLenses ">软镜</option>
                <option value="rightRGP">RGP</option>
                <option value="rightCircularCone">圆锥</option>
                <option value="rightLaser">激光</option>
                <option value="rightICL">ICL</option>
              </select>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.value1"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.value2"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightNakedLook"
                  label="裸视"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightNakedLook1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightSph"
                  label="棱"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightSph1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightColumnMirror"
                  label="柱镜"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightColumnMirror1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightAxialView"
                  label="轴位"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightAxialView1"
                />
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightLingMirror"
                  label="棱镜"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightLingMirror1"
                />
              </div>
            </li>
            <li>
              <span>底向</span>
              <div>
                <select name :disabled="disabled" v-model="inputList.overOptomty.rightEndThe">
                  <option value="rightBI">BI</option>
                  <option value="rightBO">BO</option>
                  <option value="rightBU">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
              <div>
                <select name :disabled="disabled" v-model="inputList.overOptomty.rightEndThe1">
                  <option value="rightBI1">BI</option>
                  <option value="rightBO1">BO</option>
                  <option value="rightBU1">BU</option>
                  <option value="rightBD">BD</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  label="视力"
                  v-model="inputList.overOptomty.rightVision"
                />
              </div>
              <div>
                <van-field
                   
                  :disabled="disabled"
                  v-model="inputList.overOptomty.rightVision1"
                />
              </div>
            </li>
          </ul> -->
          <!-- <p class="title">诊断</p>
          <ul class="main-buttom">
            <li>
              <span>立体</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightStereoscopic">
                <option value="rightStereoscopic1">正常</option>
                <option value="rightStereoscopic2">异常</option>
                <option value="rightStereoscopic3">没有</option>
              </select>
            </li>
            <li>
              <span>融合</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightFuse">
                <option value="rightFuse1">正常</option>
                <option value="rightFuse2">异常</option>
                <option value="rightFuse3">参差</option>
                <option value="rightFuse4">没有</option>
              </select>
            </li>
            <li>
              <span>色觉</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightColourVision ">
                <option value="rightColourVision0">正常</option>
                <option value="rightColourVision1">异常</option>
                <option value="rightColourVision2">红弱</option>
                <option value="rightColourVision3">绿弱</option>
                <option value="rightColourVision4">蓝弱</option>
                <option value="rightColourVision5">黄弱</option>
                <option value="rightColourVision6">色弱</option>
                <option value="rightColourVision7">色盲</option>
              </select>
            </li>
            <li>
              <span>红绿</span>
              <select name :disabled="disabled" v-model="inputList.overOptomty.rightRedGreen ">
                <option value="rightRedGreen1">正常</option>
                <option value="rightRedGreen2">异常</option>
                <option value="rightRedGreen3">平衡</option>
                <option value="rightRedGreen4">红强</option>
                <option value="rightRedGreen5">绿强</option>
                <option value="rightRedGreen6">其他</option>
              </select>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightCentrometer"
                label="瞳距"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightPupilHigh"
                label="瞳高"
              />
              <p>mm</p>
            </li>
            <li>
              <van-field
                 
                :disabled="disabled"
                v-model="inputList.overOptomty.rightADD"
                label="ADD"
              />
              <p>mm</p>
            </li>
          </ul> -->
        </van-tab>
      </van-tabs>
    </main>

    <footer>
      <van-button round size="small" class="footerBt-right" @click="notarize"
        >修改</van-button
      >
      <van-button
        round
        size="small"
        class="footerBt-left"
        @click.native="gosubmit"
        >提交</van-button
      >
    </footer>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
import vHeader from "../../components/common/vHeader/vHeader";

import { GetOptometryDetail, UpdateExamDetail } from "@/http/api/patientList";

export default {
  data() {
    return {
      disabled: true,
      sex: {
        F: "女",
        M: "男",
      },
      clickList: [],
      value: "",
      inputList: {
        //综合验光
        optometryDetailOS: {
          inputList: {
            leftEndThe: "leftBI",
            leftEndThe1: "leftEndThe1",
            leftStereoscopic: "leftStereoscopic1",
            leftFuse: "leftFuse1",
            leftColourVision: "leftColourVision1",
            leftMydriasis: "leftMydriasis2",
            leftRedGreen: "leftRedGreen1",
          },
        },
        optometryDetailOD: {
          inputList: {
            rightEndThe: "rightBI",
            rightEndThe1: "rightBI1",
            rightStereoscopic: "rightStereoscopic1",
            rightFuse: "rightFuse1",
            rightColourVision: "rightColourVision0",
            rightRedGreen: "rightRedGreen1",
            rightMydriasis: "rightMydriasis2",
          },
        },
        //复光
        overOptomty: {
          inputList: {},
        },
        //电脑验光
        pcOptometyOS: {
          inputList: {},
        },
        pcOptometyOD: {
          inputList: {},
        },
        //眼压
        intraPresOD:{
          inputList: {},
          
        },
        intraPresOS:{
          inputList: {},

        },

      },
    };
  },
  created() {
    console.log(this.$route.params);

    this.clickList = this.$route.params.clickList;

    this.getOptometryDetail();
  },
  mounted() {},
  methods: {
    onClick(name, title) {
      if (name == 0) {
        this.eyeType = "OD";
      } else {
        this.eyeType = "OS";
      }
    },
    gosubmit() {
      this.updateExamDetail();
    },
    notarize() {
      Dialog.confirm({
        message: "是否确认修改",
      })
        .then(() => {
          this.disabled = false;
        })
        .catch(() => {
          // on cancel
        });
    },
    //
    //列表详情
    async getOptometryDetail() {
      const { data: res } = await GetOptometryDetail(
        this.$route.params.item.emaKeyId
      ).then();
      console.log(res);
      if (res.data.pcOptometyOD) {
        this.inputList.pcOptometyOD = JSON.parse(res.data.pcOptometyOD);
      }
      if (res.data.pcOptometyOS) {
        this.inputList.pcOptometyOS = JSON.parse(res.data.pcOptometyOS);
      }
      if (res.data.optometryDetailOD) {
        this.inputList.optometryDetailOD = JSON.parse(
          res.data.optometryDetailOD
        );
      }
      if (res.data.optometryDetailOS) {
        this.inputList.optometryDetailOS = JSON.parse(
          res.data.optometryDetailOS
        );
      }
      if (res.data.intraPresOD) {
        this.inputList.intraPresOD = JSON.parse(
          res.data.intraPresOD
        );
      }
      if (res.data.intraPresOS) {
        this.inputList.intraPresOS = JSON.parse(
          res.data.intraPresOS
        );
      }
      console.log("列表", this.inputList);

      // this.inputList.overOptomty =  (res.data.overOptomty);
    },
    //修改详情
    async updateExamDetail() {
      const { data: res } = await UpdateExamDetail(
        this.$route.params.item.emaKeyId,
        JSON.stringify(this.inputList.pcOptometyOD),
        JSON.stringify(this.inputList.pcOptometyOS),
        JSON.stringify(this.inputList.optometryDetailOD),
        JSON.stringify(this.inputList.optometryDetailOS),
        JSON.stringify(this.inputList.intraPresOD),
        JSON.stringify(this.inputList.intraPresOS)
      ).then();
      console.log(res);
      if (res.data) {
        Toast("修改成功");
        this.$router.push({
          path: "/patientInfo",
        });
      } else {
        Toast("该患者不在待诊中");
      }
    },
  },

  components: {
    vHeader,
  },
};
</script>

<style lang="less" scoped>
.header-body {
  height: 100vh-20;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    span {
      display: block;
    }
  }
}
main {
  background-color: #fff;
  box-shadow: 0 5px 5px 1px rgba(165, 170, 170, 0.5);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: scroll;
  .main-one {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 10px;
    li {
      width: 90px;
      margin-bottom: 5px;
      margin-left: 5px;
    }
  }
  .title {
    font-size: 12px;
    margin-left: 86px;
    color: #888;
  }
  .main-top {
    padding: 0 20px;
    .main-top-one {
      margin-left: 50px;
    }
    .main-top-tab {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
      width: 49px;
      border: 0px solid #000;
      color: #646566;
      margin-left: 25px;
    }
    select {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      width: 70px;
      border-radius: 5px;
      outline: none;
      option {
        font-size: 5px;
      }
    }
    li {
      display: flex;
      margin-top: 5px;
      > span {
        font-size: 12px;
        line-height: 22px;
        color: #646566;
        margin-right: 25px;
      }
      > div {
        margin-right: 10px;
        select {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
          width: 90px;
          border-radius: 5px;
          outline: none;
          option {
            font-size: 5px;
          }
        }
      }
    }
  }
  .main-buttom {
    padding: 0 20px;
    select {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
      width: 90px;
      border-radius: 5px;
      outline: none;
      option {
        font-size: 5px;
      }
    }
    li {
      display: flex;
      margin-top: 5px;
      > span {
        font-size: 12px;
        margin-right: 25px;
        color: #646566;
      }
      > p {
        font-size: 12px;
        margin-right: 80px;
      }
    }
  }
}

footer {
  margin: 5px 20px;
  .van-button {
    color: #fff;
    width: 100px;
  }
  .footerBt-right {
    background-color: @blue;
    margin-left: 10px;
    margin-right: 60px;
  }
  .footerBt-left {
    background-color: @blue;
  }
}
.van-tab__pane {
  > span {
    font-size: 12px;
    margin-left: 20px;
  }
}
.titie-top {
  display: block;
  transform: translate(0px, 20px);
}
</style>