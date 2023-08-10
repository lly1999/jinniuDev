<template>
  <el-container class="container">
    <Header style="height: 60px" :icon="null">
      <!-- 系统名字 -->
      <template #title>
        <span class="text-title">成都市金牛区综合行政执法局,欢迎您~</span>
      </template>
      <!-- 时间 -->

      <template #time>
        <div class="text-week">今天是: {{ date }} {{ week }}</div>
      </template>

      <!-- 用户信息 -->
      <template #userinfo>
        <div class="router">
          <el-button
            class="buttonToMap"
            plain
            link
            color="fff"
            @click="changePermissonDialog = true"
            size="large"
            >权限管理</el-button
          >
          <el-button
            class="buttonToMap"
            plain
            link
            color="fff"
            @click="changePasswordDialog = true"
            size="large"
            >修改密码</el-button
          >

          <el-button
            class="buttonToMap"
            plain
            link
            color="fff"
            @click="toMap"
            size="large"
            >前往地图主页</el-button
          >
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ params.username + "（" + params.role + "）" }}
            <el-icon>
              <ArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </Header>

    KLIHPOIUGIYUKFVGFUKYF
    <el-container>
      <!-- 大类和子系统栏 -->
      <el-header class="navHeader">
        <!-- logo -->

        <el-image
          class="text-logo"
          :src="require('@/assets/home/logo-title.jpg')"
          fit="scale-down"
        ></el-image>
        <div class="classification" v-if="showDepts">
          <class-item
            v-for="dept in depts"
            :key="dept.deptId"
            @click="switchShowDepts(dept.deptId, dept.deptName)"
            :logo="dept.deptLogo"
            :name="dept.deptName"
            styleName="subsysName"
          ></class-item>
        </div>
        <!-- <div class="subsys" v-if="!showDepts">
          <div class="subdepts">{{choosedDeptName}}</div>
        </div> -->
        <div class="subsys" v-if="!showDepts">
          <class-item
            v-for="system in choosedSystems"
            :key="system.systemId"
            @click="show(system.to, system.url)"
            :logo="system.systemLogo"
            :name="system.systemName"
            styleName="subsysName"
          >
          </class-item>
        </div>
        <div class="subsys" v-if="!showDepts">
          <div style="padding-left: 15px; margin-top: 20px">
            <el-icon
              color="#000000"
              size="20px"
              @click="switchShowDepts(-1)"
              style="cursor: pointer"
            >
              <svg
                t="1656145922576"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1267"
                width="32"
                height="32"
              >
                <path
                  d="M587.776 961.536q-60.416 0-117.248-25.6t-101.376-69.632-71.168-101.888-26.624-122.368l0-39.936q0-23.552-0.512-50.688t-0.512-53.76l0-48.128q0-29.696-6.144-47.104t-26.624-16.384q-15.36 0-35.328-0.512t-36.352-0.512q-26.624 0-34.304-14.336t10.752-37.888q18.432-24.576 43.52-56.32t51.712-65.536 52.224-66.56 46.08-58.368q18.432-23.552 34.816-24.064t34.816 20.992q18.432 22.528 43.52 52.736t51.712 62.976 52.224 64.512 46.08 56.32q22.528 26.624 17.408 44.544t-32.768 17.92q-8.192 0-19.968 0.512t-25.088 1.024-25.6 1.024-21.504 0.512q-19.456 0-24.064 11.776t-4.608 32.256q1.024 46.08 1.024 103.424l0 106.496q0 23.552 10.752 47.104t28.672 43.008 41.472 31.744 50.176 12.288l71.68 0q40.96 0 79.36-0.512t67.072-0.512l35.84 0q22.528 0 37.376 13.824t22.528 34.816 7.68 45.568-7.168 45.568-20.992 34.816-34.304 13.824l-27.648 0-48.128 0q-26.624 0-56.832 0.512t-57.856 0.512l-47.104 0-28.672 0z"
                  p-id="1268"
                ></path>
              </svg>
            </el-icon>
          </div>
        </div>
      </el-header>
      <div class="background" v-if="showDepts">
        <img
          id="obj"
          :src="require('@/assets/home/banner-new' + picture + '.jpg')"
          width="10000"
          style="overflow-y: auto; overflow-x: auto"
        />
      </div>
      <!-- <div class="background" v-if="choosedDept === 0">
        <img src="@/assets/home/banner-hjws.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div>
      <div class="background" v-if="choosedDept === 1">
        <img src="@/assets/home/banner-srzx.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div>
      <div class="background" v-if="choosedDept === 2">
        <img src="@/assets/home/banner-jgzm.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div>
      <div class="background" v-if="choosedDept === 3">
        <img src="@/assets/home/banner-szcg.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div>
      <div class="background" v-if="choosedDept === 4">
        <img src="@/assets/home/background-ggzp.jpg" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div> -->

      <!-- 页面显示区域 -->
      <el-main class="main">
        <div
          class="classification-title"
          v-if="(choosedDept == -1) | (choosedDept == 0)"
        >
          环境卫生
          <!-- <main-info v-for="(item, idx) in choosedSystems" :key="idx" :systemName="item.systemName" :url="item.url"
            :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId">
          </main-info> -->
        </div>
        <div class="description">
          负责市政道路清扫保洁，生活垃圾分类收集、运输及处置，环卫公厕管理，城市环境卫生设施的规划和建设等。
        </div>
        <el-divider v-if="(choosedDept == -1) | (choosedDept == 0)" />
        <template v-for="(item, idx) in choosedSystems">
          <!-- <main-info v-if="item.deptId == 0" :key="idx" :systemName="item.systemName" :url="item.url"
            :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId"
            :isLogin="item.isLogin">
          </main-info> -->
          <!--测试-->
          <el-card
            v-if="item.systemName == '环卫作业运行管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-hwzy2.jpg')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystemHjws(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>
            <div class="header" style="font-size: 20px" v-else>
              <el-button
                class="el-button-null"
                type="text"
                disabled
                plain
                @click="toSystemHjws(item)"
                style="margin-top: 10px"
              >
                {{ item.systemName }}</el-button
              >
            </div>
            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
        <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
        </div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1000"
                  placement="right"
                  effect="dark"
                  @after-enter="echartInit_jgzm()"
                  trigger="click"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  style="text-align: center"
                >
                  <template #reference>
                    <el-button
                      class="el-button-hjws"
                      link
                      type="text"
                      style="margin-top: 10px; color: #e6e6e6"
                    >
                      查看详情 ></el-button
                    >
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>

                        <div style="display: flex">
                          <dv-border-box6
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @AI报警事件处置
                        </p>
                        <el-table
                          :data="hwzy_tableData1"
                          stripe
                          style="width: 100%"
                          max-height="500"
                          :header-cell-style="{
                            'font-size': '18px',
                            background: '#303133 !important',
                            color: '#ffffff',
                            border: 'none !important',
                          }"
                          :cell-style="changeCellStyle"
                        >
                          <el-table-column
                            prop="e_alarm_name"
                            label="报警名称"
                            width="180"
                          />
                          <el-table-column
                            prop="e_alarm_create_time"
                            label="报送时间"
                            width="280"
                          />
                          <el-table-column
                            prop="e_alarm_sanitation_task_truck"
                            label="处置车辆"
                            width="180"
                          />
                          <el-table-column prop="e_alarm_from" label="地点" />
                        </el-table>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @清运车辆列表
                        </p>
                        <el-table
                          :data="hwzy_tableData"
                          stripe
                          style="width: 100%"
                          max-height="500"
                          :header-cell-style="{
                            'font-size': '18px',
                            background: '#303133 !important',
                            color: '#ffffff',
                            border: 'none !important',
                          }"
                          :cell-style="changeCellStyle"
                        >
                          <el-table-column
                            prop="teamName"
                            label="名称"
                            width="180"
                          />
                          <el-table-column
                            prop="carName"
                            label="车辆名称"
                            width="280"
                          />
                          <el-table-column
                            prop="cmpName"
                            label="公司名称"
                            width="180"
                          />
                          <el-table-column prop="onlineTime" label="在线时间" />
                        </el-table>
                        <!-- <div id="container_jgzm1" style="width: 600px; height: 400px;float: left;"></div>
                <div id="container_jgzm2" style="width: 600px; height: 400px ;float:left"></div> -->
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
          <el-card
            v-if="item.systemName == '餐厨垃圾全生命周期管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-cclj2.jpg')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystemHjws(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>
            <div class="header" style="font-size: 20px" v-else>
              <el-button
                class="el-button-null"
                type="text"
                disabled
                plain
                @click="toSystemHjws(item)"
                style="margin-top: 10px"
              >
                {{ item.systemName }}</el-button
              >
            </div>
            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
<el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
</div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1000"
                  placement="top"
                  effect="dark"
                  @after-enter="echartInit_cclj()"
                  trigger="click"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  style="text-align: center"
                >
                  <template #reference>
                    <el-button
                      class="el-button-hjws"
                      link
                      type="text"
                      style="margin-top: 10px; color: #e6e6e6"
                    >
                      查看详情 ></el-button
                    >
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>
                        <div
                          id="container_cclj"
                          style="width: 1000px; height: 400px"
                        ></div>
                        <div
                          id="container_cclj1"
                          style="width: 1000px; height: 400px"
                        ></div>

                        <!-- <div id="container_jgzm1" style="width: 600px; height: 400px;float: left;"></div>
    <div id="container_jgzm2" style="width: 600px; height: 400px ;float:left"></div> -->
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div> </el-card
          ><el-card
            v-if="item.systemName == '生活垃圾全生命周期管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-ljz2.jpg')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystemHjws(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>
            <div class="header" style="font-size: 20px" v-else>
              <el-button
                class="el-button-null"
                type="text"
                disabled
                plain
                @click="toSystemHjws(item)"
                style="margin-top: 10px"
              >
                {{ item.systemName }}</el-button
              >
            </div>
            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <div>
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1000"
                  placement="left"
                  effect="dark"
                  @after-enter="echartInit_ljz()"
                  trigger="click"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  style="text-align: center"
                >
                  <template #reference>
                    <el-button
                      class="el-button-hjws"
                      link
                      type="text"
                      style="margin-top: 10px; color: #e6e6e6"
                    >
                      查看详情 ></el-button
                    >
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>
                        <div
                          id="container_ljz1"
                          style="width: 1000px; height: 400px"
                        ></div>
                        <div
                          id="container_ljz2"
                          style="width: 1000px; height: 400px"
                        ></div>

                        <!-- <div id="container_jgzm1" style="width: 600px; height: 400px;float: left;"></div>
    <div id="container_jgzm2" style="width: 600px; height: 400px ;float:left"></div> -->
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
          <el-card
            v-if="item.systemName == '垃圾分类管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-ljfl2.jpg')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystemHjws(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>
            <div class="header" style="font-size: 20px" v-else>
              <el-button
                class="el-button-null"
                type="text"
                disabled
                plain
                @click="toSystemHjws(item)"
                style="margin-top: 10px"
              >
                {{ item.systemName }}</el-button
              >
            </div>
            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <div>
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="800"
                  placement="left"
                  effect="dark"
                  @after-enter="echartInit_jgzm()"
                  trigger="click"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  style="text-align: center"
                >
                  <template #reference>
                    <el-button
                      class="el-button-hjws"
                      link
                      type="text"
                      style="margin-top: 10px; color: #e6e6e6"
                    >
                      查看详情 ></el-button
                    >
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>
                        <div style="display: flex">
                          <dv-border-box6
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>

                        <!-- <div id="container_jgzm1" style="width: 600px; height: 400px;float: left;"></div>
    <div id="container_jgzm2" style="width: 600px; height: 400px ;float:left"></div> -->
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
        </template>

        <div
          class="classification-title"
          v-if="(choosedDept == -1) | (choosedDept == 1)"
        >
          市容秩序
        </div>
        <div class="description">
          利用智慧化、科技化信息手段，开展市容秩序、餐饮油烟、共享单车、扬尘污染的智能监管，执法人员精细管理和执法案件线上办理。
        </div>
        <el-divider v-if="(choosedDept == -1) | (choosedDept == 1)" />
        <!-- <div class="img-wrapper" v-if="imgVisible"> -->
        <!-- <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->
        <template v-for="(item, idx) in choosedSystems">
          <!-- <div class="srzxInfo" v-if="item.deptId == 1 && item.systemName != '餐饮油烟管家'" :key="idx"
              :systemName="item.systemName" :url="item.url" :logo="item.systemLogo" :infoList="item.data"
              :image="item.image" :to="item.to" :deptId="item.deptId">
              <div style="margin-bottom:15%;margin-top: 10%;font-size: 25px;">

                <el-button v-if="item.url" class="el-button-succeed" type="text" @click="toSystem(item)"
                  style="margin-top:10px;color:#e6e6e6">{{ item.systemName }}</el-button>
                <el-button v-else="item.url" class="el-button-null" type="text" @click="toSystem(item)"
                  style="margin-top:10px">{{ item.systemName }}</el-button>

              </div>
              <li v-for="item in item.data" style="padding:10px;font-size: 25px;">{{ item.infoKey + ": " + item.infoVal
              }}</li>
            </div> -->
          <el-card
            v-if="item.systemName == '餐饮油烟管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-yyxt.png')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystem(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>

            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
<el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
</div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1000"
                  effect="dark"
                  @after-enter="echartInit()"
                  trigger="click"
                  placement="right-end"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                  <template #reference>
                    <el-button
                      size="medium"
                      style="padding: 10pxx; font-size: 25px"
                      type="primary"
                      link
                    >
                      查看详情 >
                    </el-button>
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>
                        <div
                          id="container_yyxt1"
                          style="width: 1000px; height: 350px"
                        ></div>
                        <div
                          id="container_yyxt2"
                          style="width: 1000px; height: 350px"
                        ></div>
                        <div
                          id="container_yyxt3"
                          style="width: 500px; height: 350px; float: left"
                        ></div>
                        <div
                          id="container_yyxt4"
                          style="width: 500px; height: 350px; float: left"
                        ></div>

                        <div style="display: flex; clear: left">
                          <dv-border-box6
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>

          <el-card
            v-if="item.systemName == '调度指挥管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-ddzh2.jpg')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystem(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>

            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
<el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
</div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1400"
                  effect="dark"
                  @after-enter="echartInit_ddzh()"
                  trigger="click"
                  placement="top"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                  <template #reference>
                    <el-button
                      size="medium"
                      style="padding: 10pxx; font-size: 25px"
                      type="primary"
                      link
                    >
                      查看详情 >
                    </el-button>
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>

                        <div
                          id="container_ddzh1"
                          style="width: 1400px; height: 400px"
                        ></div>
                        <!-- <div id="container_ddzh2" style="width: 1200px; height: 400px ;float:left"></div> -->
                        <div
                          id="container_ddzh2"
                          style="width: 500px; height: 350px; float: left"
                          @click="toDdzh"
                        ></div>
                        <div
                          id="container_ddzh3"
                          style="width: 500px; height: 350px; float: left"
                          @click="toDdzh"
                        ></div>

                        <div style="display: flex; clear: left">
                          <dv-border-box6
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
          <el-card
            v-if="item.systemName == '共享单车管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/' + item.image)"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystem(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>

            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
<el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
</div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1200"
                  effect="dark"
                  @after-enter="echartInit_srzx()"
                  trigger="click"
                  placement="left"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                  <template #reference>
                    <el-button
                      size="medium"
                      style="padding: 10pxx; font-size: 25px"
                      type="primary"
                      link
                    >
                      查看详情 >
                    </el-button>
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @详情统计
                        </p>
                        <div
                          id="container_gxdc1"
                          style="width: 500px; height: 350px; float: left"
                        ></div>
                        <div
                          id="container_gxdc2"
                          style="width: 700px; height: 350px; float: left"
                        ></div>

                        <div style="display: flex; clear: left">
                          <dv-border-box6
                            v-for="item in item.data"
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
          <el-card
            v-if="item.systemName == '扬尘治理大数据协同管家'"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <el-image
              class="image"
              :src="require('@/assets/home/img-ycxt.png')"
            >
            </el-image>
            <ul v-if="item.url">
              <div class="header">
                <el-button
                  class="el-button-hjws"
                  type="text"
                  @click="toSystem(item)"
                  style="margin-top: 10px"
                  >{{ item.systemName }}
                </el-button>
              </div>
            </ul>

            <div
              class="infoContainer"
              style="background-color: #2775b6; color: white"
            >
              <!-- logo -->
              <!-- <div>
<el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
</div> -->
              <!-- 汇总数据列表 -->
              <div>
                <!-- <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar> -->
                <ul class="infoList">
                  <li v-for="item in item.data" style="font-size: 20px">
                    {{ item.infoKey + ": " }}<span>{{ item.infoVal }}</span>
                  </li>
                </ul>

                <el-popover
                  :width="1000"
                  effect="dark"
                  @after-enter="echartInit()"
                  trigger="click"
                  placement="top"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                  <template #reference>
                    <el-button
                      size="medium"
                      style="padding: 10pxx; font-size: 25px"
                      type="primary"
                      link
                    >
                      查看详情 >
                    </el-button>
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500; font-size: 25px"
                        >
                          {{ item.systemName }}
                        </p>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @工地运企信息
                        </p>
                        <el-table
                          :data="ycxt_tableData1"
                          stripe
                          style="width: 100%"
                          max-height="500"
                          :header-cell-style="{
                            'font-size': '18px',
                            background: '#303133 !important',
                            color: '#ffffff',
                            border: 'none !important',
                          }"
                          :cell-style="changeCellStyle"
                        >
                          <el-table-column
                            prop="名称"
                            label="名称"
                            width="180"
                          />
                          <el-table-column
                            prop="更新时间"
                            label="更新时间"
                            width="240"
                          />
                          <el-table-column
                            prop="联系人"
                            label="联系人"
                            width="180"
                          />
                          <el-table-column
                            prop="车辆数"
                            label="车辆数"
                            width="180"
                          />
                          <el-table-column prop="联系电话" label="联系电话" />
                        </el-table>
                        <p
                          class="demo-rich-content__mention"
                          style="
                            margin: 0;
                            font-size: 18px;
                            color: var(--el-color-info);
                          "
                        >
                          @今日超速车辆列表
                        </p>
                        <el-table
                          :data="ycxt_tableData2"
                          stripe
                          style="width: 100%"
                          max-height="500"
                          :header-cell-style="{
                            'font-size': '18px',
                            background: '#303133 !important',
                            color: '#ffffff',
                            border: 'none !important',
                          }"
                          :cell-style="changeCellStyle"
                        >
                          <el-table-column
                            prop="超速位置"
                            label="超速位置"
                            width="180"
                          />
                          <el-table-column
                            prop="速度"
                            label="速度"
                            width="280"
                          />
                          <el-table-column
                            prop="车牌号"
                            label="车牌号"
                            width="180"
                          />
                          <el-table-column prop="超速时间" label="超速时间" />
                        </el-table>
                        <!-- <div id="container_yyxt1" style="width: 1000px; height: 350px"></div>
                      <div id="container_yyxt2" style="width: 1000px; height: 350px"></div>
                      <div id="container_yyxt3" style="width: 500px; height: 350px;float:left"></div>
                      <div id="container_yyxt4" style="width: 500px; height: 350px;float:left"></div> -->

                        <div style="display: flex; clear: left">
                          <dv-border-box6
                            style="
                              font-size: 20px;
                              padding: 10px;
                              margin-top: 0px;
                              width: 100%;
                            "
                          >
                            <div>{{ item.infoKey }}</div>
                            <div style="text-align: center">
                              {{ item.infoVal }}
                            </div>
                          </dv-border-box6>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-card>
        </template>
        <!-- </div> -->

        <div
          class="classification-title"
          v-if="(choosedDept == -1) | (choosedDept == 2)"
        >
          招牌景观
        </div>
        <div class="description">
          负责全区户外广告招牌和景观照明的监督管理，开展违规户外广告招牌专项整治，编制技术规范，并实施安全监管。
        </div>
        <el-divider v-if="(choosedDept == -1) | (choosedDept == 2)" />

        <template v-for="(item, idx) in choosedSystems">
          <!-- <main-info v-if="item.deptId==2" :key="idx" :systemName="item.systemName" :url="item.url"
            :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId">
          </main-info> -->
          <div
            class="jgzmInfo"
            v-if="item.deptId == 2"
            :key="idx"
            :systemName="item.systemName"
            :url="item.url"
            :logo="item.systemLogo"
            :infoList="item.data"
            :image="item.image"
            :to="item.to"
            :deptId="item.deptId"
          >
            <div v-if="item.systemName == '临街店铺管家'" style="display: flex">
              <el-image
                :src="require('@/assets/jgzm/' + idx + '-1.jpg')"
                style="width: 30%"
                fit="scale-down"
              >
              </el-image>
              <div
                style="
                  padding: 5px;
                  margin-top: 2%;
                  font-size: 25px;
                  margin-left: 3%;
                "
              >
                <el-button
                  v-if="item.url"
                  class="el-button-succeed"
                  type="text"
                  @click="openSystem(item)"
                  style="margin-top: 10px; margin-left: 10%"
                  >{{ item.systemName }}</el-button
                >

                <div style="padding: 10px">
                  <!-- <li v-for="item in item.data" style="font-size: 20px;padding: 5px;">{{
                    item.infoKey + ": " +
                    item.infoVal
                  }}
                  </li> -->
                  <el-popover
                    v-for="(item, index) in item.data"
                    placement="right-end"
                    :width="600"
                    trigger="hover"
                    effect="dark"
                    popper-style="background-color: #1677D9;color: white;"
                  >
                    <template #reference>
                      <li style="font-size: 20px; padding: 5px; width: 100%">
                        {{ item.infoKey + ": " + item.infoVal }}
                      </li>
                    </template>
                    <div v-if="item.infoKey === '门牌地址数量'">
                      <li style="font-size: 20px; padding: 5px; width: 100%">
                        暂无详细统计
                      </li>
                    </div>
                    <div v-if="item.infoKey === '店铺数量'">
                      <li style="font-size: 20px; padding: 5px; width: 100%">
                        暂无详细统计
                      </li>
                    </div>
                    <div v-if="item.infoKey === '零售类店铺数量'">
                      <li
                        v-for="(project, index) in retailCount"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '餐饮类店铺数量'">
                      <li
                        v-for="(project, index) in cateringCount"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '服务类店铺数量'">
                      <li
                        v-for="(project, index) in serviceCount"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '其他行业店铺数量'">
                      <li
                        v-for="(project, index) in otherCount"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '店铺空置率'">
                      <li style="font-size: 20px; padding: 5px; width: 100%">
                        暂无详细统计
                      </li>
                    </div>
                  </el-popover>

                  <!-- <el-popover :width="1200" placement="top" effect="dark" @after-enter=echartInit_jgzm() trigger="click"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
                    <template #reference>
                      <el-button class="el-button-succeed" link type="primary" style=" margin-top:10px;">
                        查看详情 ></el-button>

                    </template>
                    <template #default>
                      <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column ">
                        <div>
                          <p class="demo-rich-content__name" style="margin: 0; font-weight: 500;font-size: 25px;">
                            {{ item.systemName }}
                          </p>
                          <p class="demo-rich-content__mention"
                            style="margin: 0; font-size: 18px; color: var(--el-color-info)">
                            @详情统计
                          </p>
                          <div style="display:flex">

                            <dv-border-box8 v-for="item in item.data"
                              style="font-size: 20px;padding: 10px;margin-top: 0px;width:100%">
                              <div>{{ item.infoKey }}</div>
                              <div style="text-align:center">{{ item.infoVal }}</div>
                            </dv-border-box8>

                          </div>

                          <div id="container_ljdp1" style="width: 600px; height: 400px;float: left;"></div>
                          <div id="container_ljdp2" style="width: 600px; height: 400px ;float:left"></div>

                        </div>
                      </div>
                    </template>
                  </el-popover> -->
                </div>
              </div>
            </div>
            <div
              v-if="item.systemName == '景观照明管家'"
              style="display: flex; background-color: #e6e6e6"
            >
              <div
                style="
                  padding: 5px;
                  margin-top: 2%;
                  font-size: 20px;
                  margin-left: 2%;
                "
              >
                <el-button
                  v-if="item.url"
                  class="el-button-succeed"
                  type="text"
                  @click="openSystem(item)"
                  style="margin-top: 10px; margin-left: 10%"
                  >{{ item.systemName }}</el-button
                >
                <div style="margin-top: 1%">
                  <el-popover
                    v-for="(item, index) in item.data"
                    placement="right-end"
                    :width="500"
                    trigger="hover"
                    popper-class="my-el-popover"
                    popper-style="background-color: #1677D9;color: white;"
                  >
                    <template #reference>
                      <li style="font-size: 20px; padding: 5px; width: 100%">
                        {{ item.infoKey + ": " + item.infoVal }}
                      </li>
                    </template>
                    <div v-if="item.infoKey === '报警照明设备数'">
                      <li
                        v-for="(project, index) in jgzm_alarm_projrect"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '昨日电量统计'">
                      <li
                        v-for="(project, index) in jgzm_day_consumption"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '月电量统计'">
                      <li
                        v-for="(project, index) in jgzm_month_consumption"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                    <div v-if="item.infoKey === '年电量统计'">
                      <li
                        v-for="(project, index) in jgzm_year_consumption"
                        style="font-size: 20px; padding: 5px; width: 100%"
                      >
                        {{ project }}
                      </li>
                    </div>
                  </el-popover>
                  <!-- <li v-for="item in item.data" style="font-size: 20px;padding: 5px;width:100%">{{
                    item.infoKey + ": "
                    +
                    item.infoVal
                  }}
                  </li> -->
                  <!-- <el-popover :width="1200" placement="right" effect="dark" @after-enter=echartInit_jgzm() trigger="click"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
                    <template #reference>
                      <el-button class="el-button-succeed" link type="primary" style=" margin-top:10px;">
                        查看详情 ></el-button>

                    </template>
                    <template #default>
                      <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column ">
                        <div>
                          <p class="demo-rich-content__name" style="margin: 0; font-weight: 500;font-size: 25px;">
                            {{ item.systemName }}
                          </p>
                          <p class="demo-rich-content__mention"
                            style="margin: 0; font-size: 18px; color: var(--el-color-info)">
                            @详情统计
                          </p>
                          <div style="display:flex">

                            <dv-border-box8 v-for="item in item.data"
                              style="font-size: 20px;padding: 10px;margin-top: 0px;width:100%">
                              <div>{{ item.infoKey }}</div>
                              <div style="text-align:center">{{ item.infoVal }}</div>
                            </dv-border-box8>

                          </div>




                        </div>
                      </div>
                    </template>
                  </el-popover> -->
                </div>
              </div>
              <el-image
                fit="scale-down"
                :src="require('@/assets/jgzm/' + idx + '-1.jpg')"
                style="width: 30%; float: right; margin-left: 50%"
              >
              </el-image>
            </div>
          </div>
        </template>

        <div
          class="classification-title"
          v-if="(choosedDept == -1) | (choosedDept == 3)"
        >
          数字城管
        </div>
        <!-- <el-popover :width="300"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
          <template #reference>
            <div class="description">
              利用信息化移动通信技术、人工智能等手段实现对城市管理问题的采集、处理、分析，促进城市智慧化、精细化管理。
            </div>
          </template>
          <template #default>
            <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
              <el-avatar :size="60" src="https://avatars.githubusercontent.com/u/72015883?v=4"
                style="margin-bottom: 8px" />
              <div>
                <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">
                  Element Plus
                </p>
                <p class="demo-rich-content__mention" style="margin: 0; font-size: 14px; color: var(--el-color-info)">
                  @element-plus
                </p>
              </div>

              <p class="demo-rich-content__desc" style="margin: 0">
                Element Plus, a Vue 3 based component library for developers,
                designers and product managers
              </p>
            </div>
          </template>
        </el-popover> -->

        <div class="description">
          利用信息化移动通信技术、人工智能等手段实现对城市管理问题的采集、处理、分析，促进城市智慧化、精细化管理。
        </div>
        <el-divider v-if="(choosedDept == -1) | (choosedDept == 3)" />

        <template v-for="(item, idx) in choosedSystems">
          <!-- <main-info v-if="item.deptId==3" :key="idx" :systemName="item.systemName" :url="item.url"
            :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId">
          </main-info> -->
          <div style="display: flex">
            <div
              class="szcgInfo"
              v-if="item.deptId == 3"
              :key="idx"
              :systemName="item.systemName"
              :url="item.url"
              :logo="item.systemLogo"
              :info-list="item.data"
              :image="item.image"
              :to="item.to"
              :deptId="item.deptId"
              style="
                padding: 5px;
                margin-top: 2%;
                font-size: 25px;
                margin-left: 2%;
              "
            >
              <div class="szcg" v-if="item.systemName == '突出问题管家'">
                <div style="padding: 5px; margin-top: 5%; margin-left: 15%">
                  <el-button
                    v-if="item.url"
                    class="el-button-succeed"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 0px; color: #e6e6e6"
                    >{{ item.systemName }}</el-button
                  >
                  <el-button
                    v-else
                    class="el-button-null"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px"
                  >
                    {{ item.systemName }}</el-button
                  >

                  <li
                    v-for="item in item.data"
                    style="font-size: 20px; padding: 5px"
                  >
                    {{ item.infoKey + ": " + item.infoVal }}
                  </li>
                  <el-popover
                    :width="1200"
                    placement="right"
                    effect="dark"
                    @after-enter="echartInit()"
                    trigger="click"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  >
                    <template #reference>
                      <el-button
                        class="el-button-succeed"
                        link
                        type="text"
                        style="margin-top: 10px; color: #e6e6e6"
                      >
                        查看详情 ></el-button
                      >
                    </template>
                    <template #default>
                      <div
                        class="demo-rich-conent"
                        style="display: flex; gap: 16px; flex-direction: column"
                      >
                        <div>
                          <p
                            class="demo-rich-content__name"
                            style="margin: 0; font-weight: 500; font-size: 25px"
                          >
                            {{ item.systemName }}
                          </p>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 18px;
                              color: var(--el-color-info);
                            "
                          >
                            @详情统计
                          </p>
                          <div style="display: flex">
                            <dv-border-box8
                              v-for="item in item.data"
                              style="
                                font-size: 20px;
                                padding: 10px;
                                margin-top: 0px;
                                width: 100%;
                              "
                            >
                              <div>{{ item.infoKey }}</div>
                              <div style="text-align: center">
                                {{ item.infoVal }}
                              </div>
                            </dv-border-box8>
                          </div>

                          <div
                            id="container"
                            style="width: 600px; height: 400px; float: left"
                          ></div>
                          <div
                            id="container1"
                            style="width: 600px; height: 400px; float: left"
                          ></div>
                        </div>
                      </div>
                    </template>
                  </el-popover>
                </div>
              </div>
              <div class="AI" v-if="item.systemName == '城管AI识别管家'">
                <div style="padding: 5px; margin-top: 4%; margin-left: 15%">
                  <el-button
                    v-if="item.url"
                    class="el-button-succeed"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px; color: #e6e6e6"
                    >{{ item.systemName }}</el-button
                  >
                  <el-button
                    v-else
                    class="el-button-null"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px"
                  >
                    {{ item.systemName }}</el-button
                  >
                  <li
                    v-for="item in item.data"
                    style="font-size: 20px; padding: 5px; margin-top: 0px"
                  >
                    {{ item.infoKey + ":" + item.infoVal }}
                  </li>
                  <el-popover
                    :width="1200"
                    effect="dark"
                    trigger="click"
                    placement="top"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  >
                    <template #reference>
                      <el-button
                        class="el-button-succeed"
                        link
                        type="text"
                        style="margin-top: 0px; color: #e6e6e6"
                      >
                        查看详情 ></el-button
                      >
                    </template>
                    <template #default>
                      <div
                        class="demo-rich-conent"
                        style="display: flex; gap: 16px; flex-direction: column"
                      >
                        <div>
                          <p
                            class="demo-rich-content__name"
                            style="margin: 0; font-weight: 500; font-size: 25px"
                          >
                            {{ item.systemName }}
                          </p>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 18px;
                              color: var(--el-color-info);
                            "
                          >
                            @详情统计
                          </p>
                          <div style="display: flex">
                            <dv-border-box6
                              v-for="item in item.data"
                              style="
                                font-size: 20px;
                                padding: 10px;
                                margin-top: 0px;
                                width: 100%;
                              "
                            >
                              <div>{{ item.infoKey }}</div>
                              <div style="text-align: center">
                                {{ item.infoVal }}
                              </div>
                            </dv-border-box6>
                          </div>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 18px;
                              color: var(--el-color-info);
                            "
                          >
                            @事件列表
                          </p>
                          <el-table
                            :data="tcwtTableData"
                            stripe
                            style="width: 100%"
                            max-height="500"
                            :header-cell-style="{
                              'font-size': '18px',
                              background: '#303133 !important',
                              color: '#ffffff',
                              border: 'none !important',
                            }"
                            :cell-style="changeCellStyle"
                          >
                            <el-table-column
                              prop="event_name"
                              label="事件名称"
                              width="180"
                            />
                            <el-table-column
                              prop="modify_time"
                              label="确认时间"
                              width="280"
                            />
                            <el-table-column
                              prop="description"
                              label="问题描述"
                              width="180"
                            />
                            <el-table-column
                              prop="create_time"
                              label="创建时间"
                              width="280"
                            />
                            <el-table-column
                              prop="creator"
                              label="创建者"
                              width="180"
                            />
                            <el-table-column prop="tags" label="标签" />
                          </el-table>
                          <!-- <p><dv-charts :option="config_szcg" style="width:200px;height: 200px;" />a</p> -->
                        </div>
                      </div>
                    </template>
                  </el-popover>
                  <!-- <el-button v-if="item.url" class="el-button-succeed" type="text" @click="toSystem(item)"
                    style="margin-top:10px;color:#e6e6e6">{{ item.systemName }}</el-button>
                  <el-button v-else class="el-button-null" type="text" @click="toSystem(item)" style="margin-top:10px">
                    {{ item.systemName }}</el-button> -->
                </div>
              </div>

              <div class="szcg" v-if="item.systemName == '数字化城市信息管家'">
                <div
                  style="
                    padding: 5px;
                    margin-top: 5%;
                    margin-left: 15%;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <el-button
                    v-if="item.url"
                    class="el-button-succeed"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px; color: #e6e6e6"
                    >{{ item.systemName }}</el-button
                  >
                  <el-button
                    v-else
                    class="el-button-null"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px"
                  >
                    {{ item.systemName }}</el-button
                  >
                  <li
                    v-for="item in item.data"
                    style="font-size: 20px; padding: 5px; margin-top: 0px"
                  >
                    {{ item.infoKey + ":" + item.infoVal }}
                  </li>

                  <el-popover
                    :width="1200"
                    placement="top"
                    effect="dark"
                    @after-enter="echartInit()"
                    trigger="click"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  >
                    <template #reference>
                      <el-button
                        class="el-button-succeed"
                        link
                        type="text"
                        style="margin-top: 0px; color: #e6e6e6"
                      >
                        查看详情 >
                      </el-button>
                    </template>
                    <template #default>
                      <div
                        class="demo-rich-conent"
                        style="display: flex; gap: 16px; flex-direction: column"
                      >
                        <div>
                          <p
                            class="demo-rich-content__name"
                            style="margin: 0; font-weight: 500; font-size: 25px"
                          >
                            {{ item.systemName }}
                          </p>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 18px;
                              color: var(--el-color-info);
                            "
                          >
                            @详情统计
                          </p>
                          <div
                            id="container2"
                            style="width: 1200px; height: 350px"
                          ></div>
                          <div
                            id="container3"
                            style="width: 400px; height: 350px; float: left"
                          ></div>
                          <div
                            id="container4"
                            style="width: 800px; height: 350px; float: right"
                          ></div>
                          <div style="display: flex; clear: left">
                            <dv-border-box6
                              v-for="item in item.data"
                              style="
                                font-size: 20px;
                                padding: 10px;
                                margin-top: 0px;
                                width: 100%;
                              "
                            >
                              <div>{{ item.infoKey }}</div>
                              <div style="text-align: center">
                                {{ item.infoVal }}
                              </div>
                            </dv-border-box6>
                          </div>
                        </div>
                      </div>
                    </template>
                    <!-- <div class="charts" style="width:300px;height: 300px;">
                        案件完成率
                        <dv-charts :option="config_szcg" style="width:200px;height: 200px;" />
                      </div> -->
                  </el-popover>
                </div>
              </div>
              <div class="syd" v-if="item.systemName == '城管诉易达管家'">
                <div style="padding: 5px; margin-top: 5%; margin-left: 20%">
                  <el-button
                    v-if="item.url"
                    class="el-button-succeed"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px; color: #e6e6e6"
                    >{{ item.systemName }}</el-button
                  >
                  <el-button
                    v-else
                    class="el-button-null"
                    type="text"
                    @click="toSystem(item)"
                    style="margin-top: 10px"
                  >
                    {{ item.systemName }}</el-button
                  >
                  <li
                    v-for="item in item.data"
                    style="font-size: 20px; padding: 5px; margin-top: 0px"
                  >
                    {{ item.infoKey + ":" + item.infoVal }}
                  </li>
                  <el-popover
                    :width="1000"
                    placement="top"
                    effect="dark"
                    trigger="click"
                    @after-enter="echartInit_syd()"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  >
                    <template #reference>
                      <el-button
                        class="el-button-succeed"
                        link
                        type="text"
                        style="margin-top: 0px; color: #e6e6e6"
                      >
                        查看详情 ></el-button
                      >
                    </template>
                    <template #default>
                      <div
                        class="demo-rich-conent"
                        style="display: flex; gap: 16px; flex-direction: column"
                      >
                        <div>
                          <p
                            class="demo-rich-content__name"
                            style="margin: 0; font-weight: 500; font-size: 25px"
                          >
                            {{ item.systemName }}
                          </p>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 18px;
                              color: var(--el-color-info);
                            "
                          >
                            @详情统计
                          </p>
                          <div
                            id="container_syd1"
                            style="width: 500px; height: 350px; float: left"
                          ></div>
                          <div
                            id="container_syd2"
                            style="width: 500px; height: 350px; float: right"
                          ></div>

                          <p
                            v-for="item in item.data"
                            style="
                              font-size: 20px;
                              padding: 5px;
                              margin-top: 0px;
                            "
                          >
                            {{ item.infoKey + ":" + item.infoVal }}
                          </p>
                          <!-- <p><dv-charts :option="config_szcg" style="width:200px;height: 200px;" />a</p> -->
                        </div>
                      </div>
                    </template>
                  </el-popover>
                </div>
              </div>
            </div>
          </div>
        </template>

        <el-image
          class="banner"
          :src="require('@/assets/home/banner.jpg')"
          style=""
        >
        </el-image>
      </el-main>
      <el-dialog
        v-model="changePermissonDialog"
        title="权限管理"
        align-center="true"
        width="80%"
        @close="handleClose"
      >
      <div style="font-size:2rem;">权限申请列表</div>
        <el-table
          :data="
            permissonApplicationList.slice(
              (current_Page - 1) * 10,
              current_Page * 10
            )
          "
          v-loading="aplicationloading"
          size="large"
          style="width: 100%"
          :cell-style="{'font-size':'1rem'  }"
        >
          <!-- 序号（应该可选才对-目前没有） -->
          <el-table-column prop="indexid" label="申请编号" />

          \
          <el-table-column prop="username" label="人员姓名"  />
          <el-table-column prop="telephone" label="手机号"  />
          <el-table-column prop="roleName" label="人员角色" />
          <el-table-column prop="roleSystem" label="子系统名称" />
          <el-table-column prop="operateType" label="权限变更" />
          <el-table-column prop="operator" label="管理员"  />
          <el-table-column prop="operate" label="操作" >
            <template #default="scope">
              <el-button
                type="primary"
                @click="approvedClick(refreshApproved, scope.row)"
                >同意</el-button
              >
              <el-button
                type="danger"
                @click="refusedClick(refreshRefused, scope.row)"
                >拒回</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="float-end">
          <el-pagination
            background
            layout="->,total, prev, pager, next, jumper"
            :total="total_Records"
            :current-page="current_Page"
            :page-size="10"
            @current-change="getPermissionApplication"
          />
        </div>
        <el-alert
          id="permissonAlert"
          title="请先处理完以上权限申请事务！"
          type="error"
          center
          show-icon
          style="display: none"
          :closable="false"
        />
        <div style="font-size:2rem; ">人员权限列表</div>
        <el-table
          :data="permissionList.slice((currentPage - 1) * 10, currentPage * 10)"
          v-loading="loading"
          border
          size="large"
          style="width: 100%;"
          :cell-style="{ 'font-size':'1rem' }"
        >
          <!-- 序号（应该可选才对-目前没有） -->
          <el-table-column type="index" label="序号" />

          \
          <el-table-column prop="username" label="人员姓名" />
          <el-table-column prop="telephone" label="手机号" width="150"/>
          <el-table-column
            prop="zhxz"
            label="综合行政管理执法智慧管家"
        
          />
          <el-table-column prop="cyyy" label="餐饮油烟管家"/>
          <el-table-column prop="ddzh" label="调度指挥管家" />
          <el-table-column
            prop="yczl"
            label="扬尘治理大数据协同管家"
     
          />
          <el-table-column prop="gxdc" label="共享单车管家"/>
          <el-table-column
            prop="jgzm"
            label="景观照明集中控制管家"
          />
          <el-table-column prop="ggzp" label="广告招牌二维码管家"  />
          <el-table-column prop="shlj" label="生活垃圾分类管家" />
          <el-table-column prop="cclj" label="餐厨垃圾收运管家" />
          <el-table-column prop="ljsj" label="垃圾数据归集管家" />
          <el-table-column prop="cgAI" label="城管AI识别管家" />
          <el-table-column prop="szhcs" label="数字化城市信息管家"  />
          <el-table-column prop="cgsyd" label="城管诉易达管家" />
          <el-table-column prop="operate" label="操作" >
            <template #default="scope">
              <el-button type="primary" @click="handleClick(scope.row)"
                >更改</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <div class="float-end">
          <el-pagination
            background
            layout="->,total, prev, pager, next, jumper"
            :total="totalRecords"
            :current-page="currentPage"
            :page-size="10"
            @current-change="getPermission"
          />
        </div>
      </el-dialog>

      <el-dialog
        v-model="handleEvent"
        title="权限变更"
        width="60%"
        @close="handleClose"
      >
        <div
          style="text-align: center; font-size: x-large; font-weight: bold"
        ></div>

        <el-form
          ref="permissionForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="200px"
          class="demo-ruleForm"
          v-loading="formLoading"
        >
          <div
            style="font-size: 1.25rem; padding-left: 5rem; font-weight: bold"
          >
            姓名：{{ permissonName }}&nbsp; &nbsp; &nbsp; 手机号：{{
              permissonTelephone
            }}
          </div>

          <el-form-item label="共享单车管家" prop="gxdc">
            <el-switch
              v-model="ruleForm.gxdc"
              @change="changeGxdc($event, ruleForm)"
              :disabled="switchGxdc"
            ></el-switch>
            <el-radio-group
              v-model="radioGxdc"
              class="radioPermisson"
              :disabled="disradioGxdc"
              @change="radioChangeGxdc(radioGxdc)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
              
            </el-radio-group>
          </el-form-item>
          <el-form-item label="垃圾数据归集管家" prop="ljsj">
            <el-switch
              v-model="ruleForm.ljsj"
              @change="changeLjsj($event, ruleForm)"
              :disabled="switchLjsj"
            ></el-switch>
            <el-radio-group
              v-model="radioLjsj"
              class="radioPermisson"
              :disabled="disradioLjsj"
              @change="radioChangeLjsj(radioLjsj)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
              
            </el-radio-group>
          </el-form-item>
          <el-form-item label="城管AI识别管家" prop="cgAI">
            <el-switch
              v-model="ruleForm.cgAI"
              @change="changeCgAI($event, ruleForm)"
              :disabled="switchCgAI"
            ></el-switch>
            <el-radio-group
              v-model="radioCgAI"
              class="radioPermisson"
              :disabled="disradioCgAI"
              @change="radioChangeCgAI(radioCgAI)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="城管诉易达管家" prop="cgsyd">
            <el-switch
              v-model="ruleForm.cgsyd"
              @change="changeCgsyd($event, ruleForm)"
              :disabled="switchCgsyd"
            ></el-switch>
            <el-radio-group
              v-model="radioCgsyd"
              class="radioPermisson"
              :disabled="disradioCgsyd"
              @change="radioChangeCgsyd(radioCgsyd)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="广告招牌二维码管家" prop="ggzp">
            <el-switch
              v-model="ruleForm.ggzp"
              @change="changeGgzp($event, ruleForm)"
              :disabled="switchGgzp"
            ></el-switch>
            <el-radio-group
              v-model="radioGgzp"
              class="radioPermisson"
              :disabled="disradioGgzp"
              @change="radioChangeGgzp(radioGgzp)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
               <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="扬尘治理大数据协同管家" prop="yczl">
            <el-switch
              v-model="ruleForm.yczl"
              @change="changeYczl($event, ruleForm)"
              :disabled="switchYczl"
            ></el-switch>
            <el-radio-group
              v-model="radioYczl"
              class="radioPermisson"
              :disabled="disradioYczl"
              @change="radioChangeYczl(radioYczl)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="数字化城市信息管家" prop="szhcs">
            <el-switch
              v-model="ruleForm.szhcs"
              @change="changeSzhcs($event, ruleForm)"
              :disabled="switchSzhcs"
              
            ></el-switch>
            <el-radio-group
              v-model="radioSzhcs"
              class="radioPermisson"
              :disabled="disradioSzhcs"
              @change="radioChangeSzhcs(radioSzhcs)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="景观照明集中控制管家" prop="jgzm">
            <el-switch
              v-model="ruleForm.jgzm"
              @change="changeJgzm($event, ruleForm)"
              :disabled="switchJgzm"
            ></el-switch>
            <el-radio-group
              v-model="radioJgzm"
              class="radioPermisson"
              :disabled="disradioJgzm"
              @change="radioChangeJgzm(radioJgzm)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生活垃圾分类管家" prop="shlj">
            <el-switch
              v-model="ruleForm.shlj"
              @change="changeShlj($event, ruleForm)"
              :disabled="switchShlj"
            ></el-switch>
            <el-radio-group
              v-model="radioShlj"
              class="radioPermisson"
              :disabled="disradioShlj"
              @change="radioChangeShlj(radioShlj)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="综合行政管理执法智慧管家" prop="zhxz">
            <el-switch
              v-model="ruleForm.zhxz"
              @change="changeZhxz($event, ruleForm)"
              :disabled="switchZhxz"
            ></el-switch>
            <el-radio-group
              v-model="radioZhxz"
              class="radioPermisson"
              :disabled="disradioZhxz"
              @change="radioChangeZhxz(radioZhxz)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="调度指挥管家" prop="ddzh">
            <el-switch
              v-model="ruleForm.ddzh"
              @change="changeDdzh($event, ruleForm)"
              :disabled="switchDdzh"
            ></el-switch>
            <el-radio-group
              v-model="radioDdzh"
              class="radioPermisson"
              :disabled="disradioDdzh"
              @change="radioChangeDdzh(radioDdzh)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="餐厨垃圾收运管家" prop="cclj">
            <el-switch
              v-model="ruleForm.cclj"
              @change="changeCclj($event, ruleForm)"
              :disabled="switchCclj"
            ></el-switch>
            <el-radio-group
              v-model="radioCclj"
              class="radioPermisson"
              :disabled="disradioCclj"
              @change="radioChangeCclj(radioCclj)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="餐饮油烟管家" prop="cyyy">
            <el-switch
              v-model="ruleForm.cyyy"
              @change="changeCyyy($event, ruleForm)"
              :disabled="switchCyyy"
            ></el-switch>
            <el-radio-group
              v-model="radioCyyy"
              class="radioPermisson"
              :disabled="disradioCyyy"
              @change="radioChangeCyyy(radioCyyy)"
            >
              <!-- <el-radio label="superAdmin" size="large"
                >可对所有子系统进行访问及管理</el-radio
              > -->
              <!-- <el-radio label="tempAdmin" size="large"
                >仅可查看，不能维护系统数据</el-radio
              > -->
              <el-radio label="viewer" size="large">浏览信息</el-radio>
              <el-radio label="admin" size="large">管理参数</el-radio>
              <el-radio label="operator" size="large">操作系统</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        v-model="changePasswordDialog"
        title="修改密码"
        align-center="true"
        width="30%"
      >
        <el-form :model="form" :rules="rules" ref="ruleFormRef">
          <el-form-item
            label="新密码"
            :label-width="formLabelWidth"
            prop="new_password"
          >
            <el-input
              v-model="form.new_password"
              autocomplete="off"
              type="password"
            />
          </el-form-item>
          <el-form-item
            label="再次确认密码"
            :label-width="formLabelWidth"
            prop="new_password_confirm"
          >
            <el-input
              v-model="form.new_password_confirm"
              autocomplete="off"
              type="password"
            />
          </el-form-item>
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="changePasswordDialog = false">取消</el-button>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              确认修改密码
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-container>
    <!-- 底部信息栏 -->
    <el-container>
      <!-- <el-footer class="footer">
        <div class="foot-info">
          
          <li>Copyright 2022 http://zhxzzfj.XXXX.gov.cn All Rights Reserved</li>
          <li>川公网安备 XXXXXXXXXXX号 ICP备案：蜀ICP备XXXXXXXX号 网站标识码：XXXXXXXXXX</li>
          <li>主办：成都市金牛区综合行政执法局 地址：金牛区某街道某门牌号　电话：XXXX-XXXXXX</li>
        </div>
      </el-footer> -->
    </el-container>
  </el-container>
</template>

<script setup>
import "element-plus/theme-chalk/display.css";
import { ArrowDown } from "@element-plus/icons-vue";
import { ref, reactive, computed, onBeforeMount, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import MainInfo from "@/views/home/components/MainInfo.vue";
import ClassItem from "@/views/home/components/ClassItem.vue";
import Header from "@/components/Header.vue";
import { get, getDeptList, getSystemList, changePassword } from "@/api/home.js";
import { getToken, getMainSyd } from "@/api/syd";
import { getTokenGxdc, getMainGxdc, getCompany } from "@/api/gxdc";
import { params } from "@/store/store.js";
import * as echarts from "echarts";
import { getRdfx, getSjqsfx, getResourceSzcg } from "@/api/szcg.js";
import {
  getOverStandard,
  getMonitor,
  getCompanyType,
  getTouSU,
} from "@/api/yyxt";
import { getAiUrl } from "@/api/ai";
import { getMain, getCategory } from "@/api/ggzp";
import { getMainJgzm, getElectricity } from "@/api/jgzm";
import { getAllEvents, getResourceTcwt, getTrend } from "@/api/tcwt";
import { getSitesData } from "@/api/cclj";
import { getMainLjz, getSum, getWarning } from "@/api/ljz";
import { getCarLists, getAiAlarm } from "@/api/hwzy";
import { getCheckRate, getCntStatus } from "@/api/ddzh";
import { getCompanyDust, getOverSpeed } from "@/api/ycxt";

import axios from "axios";
const aiUrl = ref("");
const ruleFormRef = ref(null);
const visible = ref(false);
const validatePass = (rules, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码！"));
  } else {
    if (form.new_password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("new_password_confirm", () => null);
    }
    callback();
  }
};

//=========================================================================2023/08/08 管理员管理人员访问子系统的权限
const permissionList = reactive([]);
const permissonApplicationList = reactive([]);
const switchGxdc = ref(false);
const disradioGxdc = ref(false);
const switchLjsj = ref(false);
const disradioLjsj = ref(false);
const switchCgAI = ref(false);
const disradioCgAI = ref(false);
const switchCgsyd = ref(false);
const disradioCgsyd = ref(false);
const switchGgzp = ref(false);
const disradioGgzp = ref(false);
const switchYczl = ref(false);
const disradioYczl = ref(false);
const switchSzhcs = ref(false);
const disradioSzhcs = ref(false);
const switchJgzm = ref(false);
const disradioJgzm = ref(false);
const switchShlj = ref(false);
const disradioShlj = ref(false);
const switchZhxz = ref(false);
const disradioZhxz = ref(false);
const switchDdzh = ref(false);
const disradioDdzh = ref(false);
const switchCclj = ref(false);
const disradioCclj = ref(false);
const switchCyyy = ref(false);
const disradioCyyy = ref(false);
const loading = ref(true);
const aplicationloading = ref(true);
const formLoading = ref(true);
const totalRecords = ref(1000);
let currentPage = ref(1);
let pageCount = 0;
const total_Records = ref(1000);
let current_Page = ref(1);
let page_Count = 0;
const permissionForm = ref(null);
const handleEvent = ref(false);
const permissonName = ref("");
const applicationId = ref("");
const permissonTelephone = ref("");
const radioGxdc = ref("");
const radioLjsj = ref("");
const radioCgAI = ref("");
const radioCgsyd = ref("");
const radioGgzp = ref("");
const radioYczl = ref("");
const radioSzhcs = ref("");
const radioJgzm = ref("");
const radioShlj = ref("");
const radioZhxz = ref("");
const radioDdzh = ref("");
const radioCclj = ref("");
const radioCyyy = ref("");
const ruleForm = reactive({
  gxdc: false,
  ljsj: false,
  cgAI: false,
  cgsyd: false,
  ggzp: false,
  yczl: false,
  szhcs: false,
  jgzm: false,
  shlj: false,
  zhxz: false,
  ddzh: false,
  cclj: false,
  cyyy: false,
});
const permissonAlert = ref(false);

const getPermissonApplicationListList = (pageNum) => {
  axios({
    url: "/api/auth/get_permission_applications",
    method: "get",
    headers: {
      Authorization: "Bearer " + params.token,
    },
  }).then(function (resp) {
    permissonApplicationList.splice(0, permissonApplicationList.length);
    var data = resp.data;
    console.log(111, data);

    console.log("resp.code：" + data);
    for (var key in data) {
      if (data[key].reviewed == false) {
        var permission_list = {
          indexid: data[key].id,
          username: data[key].realName,
          telephone: data[key].telephone,
          roleName: data[key].roleName,
          roleSystem: data[key].roleSystem,
          operator: data[key].operator,
          operateType: data[key].operateType,
        };
        if (data[key].operateType == "add") {
          permission_list.operateType = "允许访问";
        } else if (data[key].operateType == "delete") {
          permission_list.operateType = "禁止访问";
        }
        if (data[key].roleName == "viewer") {
          permission_list.roleName = "浏览信息";
        } else if (data[key].roleName == "operator") {
          permission_list.roleName = "操作系统";
        } else if (data[key].roleName == "admin") {
          permission_list.roleName = "管理参数";
        }
        permissonApplicationList.push(permission_list);
      }
    }
    total_Records.value = permissonApplicationList.length;
    page_Count = parseInt(permissonApplicationList.length) % 10;
    current_Page.value = pageNum;
    aplicationloading.value = false;
    var div = document.getElementById("permissonAlert");
    if (permissonApplicationList.length == 0) {
      div.style.display = "none";
    }
  });
};
getPermissonApplicationListList(1);
setInterval(getPermissonApplicationListList(1), 60000);
const getPermissionApplication = (pageNum) => {
  // 当前页
  current_Page.value = pageNum;
};

const approvedClick = (callback, row) => {
  applicationId.value = row.indexid;
  axios({
    url: "/api/auth/approve_application/" + applicationId.value,
    method: "get",
    headers: {
      Authorization: "Bearer " + params.token,
    },
  }).then(function (resp) {
    aplicationloading.value = true;
    loading.value = true;
    getPermissionList(1);
    getPermissonApplicationListList(1);
  });
  callback();
};
const refreshApproved = () => {
  if (aplicationloading.value == false) {
    ElMessage({
      message: "权限更改成功！",
      type: "success",
    });
  }
};
const refreshRefused = () => {
  if (aplicationloading.value == false) {
    ElMessage({
      message: "权限更改已拒回！",
      type: "success",
    });
  }
};
const refusedClick = (callback, row) => {
  applicationId.value = row.indexid;
  axios({
    url: "/api/auth/refuse_application/" + applicationId.value,
    method: "get",
    headers: {
      Authorization: "Bearer " + params.token,
    },
  }).then(function (resp) {
    aplicationloading.value = true;
    loading.value = true;
    getPermissionList(1);
    getPermissonApplicationListList(1);
  });
  callback();
};

const getPermissionList = (pageNum) => {
  axios({
    // url: "/api/lzj/getWarning",
    url: "/api/auth/non_super_admin_list",
    method: "get",
    headers: {
      Authorization: "Bearer " + params.token,
    },
  }).then(function (resp) {
    permissionList.splice(0, permissionList.length);
    var data = resp.data;
    console.log(111, data);

    console.log("resp.code：" + data);
    for (var key in data) {
      var permission_list = {
        username: data[key].realName,
        telephone: data[key].telephone,
        gxdc: "×",
        ljsj: "×",
        cgAI: "×",
        cgsyd: "×",
        ggzp: "×",
        yczl: "×",
        szhcs: "×",
        jgzm: "×",
        shlj: "×",
        zhxz: "×",
        ddzh: "×",
        cclj: "×",
        cyyy: "×",
      };
      var roleList = data[key].roleList;
      for (var index in roleList) {
        if (roleList[index].system == "all") {
          permission_list.cyyy = "√";
          permission_list.gxdc = "√";
          permission_list.ljsj = "√";
          permission_list.cgAI = "√";
          permission_list.cgsyd = "√";
          permission_list.ggzp = "√";
          permission_list.yczl = "√";
          permission_list.szhcs = "√";
          permission_list.jgzm = "√";
          permission_list.shlj = "√";
          permission_list.zhxz = "√";
          permission_list.cclj = "√";
          permission_list.ddzh = "√";
        }
        if (roleList[index].system == "共享单车管家") {
          permission_list.gxdc = "√";
        }
        if (roleList[index].system == "垃圾数据归集管家") {
          permission_list.ljsj = "√";
        }
        if (roleList[index].system == "城管AI识别管家") {
          permission_list.cgAI = "√";
        }
        if (roleList[index].system == "城管诉易达管家") {
          permission_list.cgsyd = "√";
        }
        if (roleList[index].system == "广告招牌二维码管家") {
          permission_list.ggzp = "√";
        }
        if (roleList[index].system == "扬尘治理大数据协同管家") {
          permission_list.yczl = "√";
        }
        if (roleList[index].system == "数字化城市信息管家") {
          permission_list.szhcs = "√";
        }
        if (roleList[index].system == "景观照明集中控制管家") {
          permission_list.jgzm = "√";
        }
        if (roleList[index].system == "生活垃圾分类管家") {
          permission_list.shlj = "√";
        }
        if (roleList[index].system == "综合行政管理执法智慧管家") {
          permission_list.zhxz = "√";
        }
        if (roleList[index].system == "调度指挥管家") {
          permission_list.ddzh = "√";
        }
        if (roleList[index].system == "餐厨垃圾收运管家") {
          permission_list.cclj = "√";
        }
        if (roleList[index].system == "餐饮油烟管家") {
          permission_list.cyyy = "√";
        }
      }
      permissionList.push(permission_list);
    }
    totalRecords.value = permissionList.length;
    pageCount = parseInt(permissionList.length) % 10;
    currentPage.value = pageNum;
    loading.value = false;
  });
};
getPermissionList(1);
setInterval(getPermissionList(1), 60000);

const getPermission = (pageNum) => {
  // 当前页
  currentPage.value = pageNum;
};

const handleClick = (row) => {
  console.log("length:" + permissonApplicationList.length);
  var div = document.getElementById("permissonAlert");
  if (permissonApplicationList.length != 0) {
    console.log("div.style.display" + div.style.display);
    div.style.display = "flex";
  } else {
    div.style.display = "none";
    formLoading.value = true;
    permissonName.value = row.username;
    permissonTelephone.value = row.telephone;
    console.log("permissonTelephone:" + permissonTelephone.value);
    handleEvent.value = true;
    radioGxdc.value = "";
    radioLjsj.value = "";
    radioCgAI.value = "";
    radioCgsyd.value = "";
    radioGgzp.value = "";
    radioYczl.value = "";
    radioSzhcs.value = "";
    radioJgzm.value = "";
    radioShlj.value = "";
    radioZhxz.value = "";
    radioDdzh.value = "";
    radioCclj.value = "";
    radioCyyy.value = "";
    ruleForm.gxdc = false;
    ruleForm.ljsj = false;
    ruleForm.cgAI = false;
    ruleForm.cgsyd = false;
    ruleForm.ggzp = false;
    ruleForm.yczl = false;
    ruleForm.szhcs = false;
    ruleForm.jgzm = false;
    ruleForm.shlj = false;
    ruleForm.zhxz = false;
    ruleForm.ddzh = false;
    ruleForm.cclj = false;
    ruleForm.cyyy = false;

    switchGxdc.value = false;
    switchLjsj.value = false;
    switchCgAI.value = false;
    switchCgsyd.value = false;
    switchGgzp.value = false;
    switchYczl.value = false;
    switchSzhcs.value = false;
    switchJgzm.value = false;
    switchShlj.value = false;
    switchZhxz.value = false;
    switchDdzh.value = false;
    switchCclj.value = false;
    switchCyyy.value = false;

    disradioGxdc.value = true;
    disradioLjsj.value = true;
    disradioCgAI.value = true;
    disradioCgsyd.value = true;
    disradioGgzp.value = true;
    disradioYczl.value = true;
    disradioSzhcs.value = true;
    disradioJgzm.value = true;
    disradioShlj.value = true;
    disradioZhxz.value = true;
    disradioDdzh.value = true;
    disradioCclj.value = true;
    disradioCyyy.value = true;

    axios({
      // url: "/api/lzj/getWarning",
      url: "/api/auth/non_super_admin_list",
      method: "get",
      headers: {
        Authorization: "Bearer " + params.token,
      },
    }).then(function (resp) {
      var data = resp.data;

      for (var key in data) {
        if (data[key].telephone == permissonTelephone.value) {
          var roleList = data[key].roleList;
          for (var index in roleList) {
            if (roleList[index].system == "all") {
              ruleForm.gxdc = true;
              ruleForm.ljsj = true;
              ruleForm.cgAI = true;
              ruleForm.cgsyd = true;
              ruleForm.ggzp = true;
              ruleForm.yczl = true;
              ruleForm.szhcs = true;
              ruleForm.jgzm = true;
              ruleForm.shlj = true;
              ruleForm.zhxz = true;
              ruleForm.ddzh = true;
              ruleForm.cclj = true;
              ruleForm.cyyy = true;
              radioGxdc.value = roleList[index].name;
              radioLjsj.value = roleList[index].name;
              radioCgAI.value = roleList[index].name;
              radioCgsyd.value = roleList[index].name;
              radioGgzp.value = roleList[index].name;
              radioYczl.value = roleList[index].name;
              radioSzhcs.value = roleList[index].name;
              radioJgzm.value = roleList[index].name;
              radioShlj.value = roleList[index].name;
              radioZhxz.value = roleList[index].name;
              radioDdzh.value = roleList[index].name;
              radioCclj.value = roleList[index].name;
              radioCyyy.value = roleList[index].name;
              switchGxdc.value = true;
              switchLjsj.value = true;
              switchCgAI.value = true;
              switchCgsyd.value = true;
              switchGgzp.value = true;
              switchYczl.value = true;
              switchSzhcs.value = true;
              switchJgzm.value = true;
              switchShlj.value = true;
              switchZhxz.value = true;
              switchDdzh.value = true;
              switchCclj.value = true;
              switchCyyy.value = true;

              disradioGxdc.value = true;
              disradioLjsj.value = true;
              disradioCgAI.value = true;
              disradioCgsyd.value = true;
              disradioGgzp.value = true;
              disradioYczl.value = true;
              disradioSzhcs.value = true;
              disradioJgzm.value = true;
              disradioShlj.value = true;
              disradioZhxz.value = true;
              disradioDdzh.value = true;
              disradioCclj.value = true;
              disradioCyyy.value = true;
              ElMessage({
                message: "您不可更改该用户权限！",
                type: "warning",
              });
            }
            if (roleList[index].system == "共享单车管家") {
              ruleForm.gxdc = true;
disradioGxdc.value = false;
              radioGxdc.value = roleList[index].name;
            }
            if (roleList[index].system == "垃圾数据归集管家") {
              ruleForm.ljsj = true;
              disradioLjsj.value = false;
              radioLjsj.value = roleList[index].name;
            }
            if (roleList[index].system == "城管AI识别管家") {
              ruleForm.cgAI = true;
              disradioCgAI.value = false;
              radioCgAI.value = roleList[index].name;
            }
            if (roleList[index].system == "城管诉易达管家") {
              ruleForm.cgsyd = true;
              disradioCgsyd.value = false;
              radioCgsyd.value = roleList[index].name;
            }
            if (roleList[index].system == "广告招牌二维码管家") {
              ruleForm.ggzp = true;
              disradioGgzp.value = false;
              radioGgzp.value = roleList[index].name;
            }
            if (roleList[index].system == "扬尘治理大数据协同管家") {
              ruleForm.yczl = true;
              disradioYczl.value = false;
              radioYczl.value = roleList[index].name;
            }
            if (roleList[index].system == "数字化城市信息管家") {
              ruleForm.szhcs = true;
               disradioSzhcs.value = false;
              radioSzhcs.value = roleList[index].name;
            }
            if (roleList[index].system == "景观照明集中控制管家") {
              ruleForm.jgzm = true;
              disradioJgzm.value = false;
              radioJgzm.value = roleList[index].name;
            }
            if (roleList[index].system == "生活垃圾分类管家") {
              ruleForm.shlj = true;
              disradioShlj.value = false;
              radioShlj.value = roleList[index].name;
            }
            if (roleList[index].system == "综合行政管理执法智慧管家") {
              ruleForm.zhxz = true;
              disradioZhxz.value = false;
              radioZhxz.value = roleList[index].name;
            }
            if (roleList[index].system == "调度指挥管家") {
              ruleForm.ddzh = true;
              disradioDdzh.value = false;
              radioDdzh.value = roleList[index].name;
            }
            if (roleList[index].system == "餐厨垃圾收运管家") {
              ruleForm.cclj = true;
              disradioCclj.value = false;
              radioCclj.value = roleList[index].name;
            }
            if (roleList[index].system == "餐饮油烟管家") {
              ruleForm.cyyy = true;
              disradioCyyy.value = false;
              radioCyyy.value = roleList[index].name;
            }
          }
          formLoading.value = false;
        }
      }
    });
  }
};

const radioChangeGxdc = (radio) => {
  
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "共享单车管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};


const changeGxdc = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.gxdc = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioGxdc.value = false;
    } else {
      ruleForm.gxdc = false;
      disradioGxdc.value = true;
      if (radioGxdc.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "共享单车管家",
              roleName: radioGxdc.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioGxdc.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.gxdc = false;
    } else {
      ruleForm.gxdc = true;
    }
  }
};

const radioChangeLjsj = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "垃圾数据归集管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeLjsj = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.ljsj = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioLjsj.value = false;
    } else {
      ruleForm.ljsj = false;
      disradioLjsj.value = true;
      if (radioLjsj.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "垃圾数据归集管家",
              roleName: radioLjsj.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioLjsj.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.ljsj = false;
    } else {
      ruleForm.ljsj = true;
    }
  }
};

const radioChangeCgAI = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "城管AI识别管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeCgAI = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.cgAI = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioCgAI.value = false;
    } else {
      ruleForm.cgAI = false;
      disradioCgAI.value = true;
      disradioCgAI.value = true;
      if (radioCgAI.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "城管AI识别管家",
              roleName: radioCgAI.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioCgAI.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.cgAI = false;
    } else {
      ruleForm.cgAI = true;
    }
  }
};

const radioChangeCgsyd = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "城管诉易达管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeCgsyd = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.cgsyd = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioCgsyd.value = false;
    } else {
      ruleForm.cgsyd = false;
      disradioCgsyd.value = true;
      if (radioCgsyd.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "城管诉易达管家",
              roleName: radioCgsyd.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioCgsyd.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.cgsyd = false;
    } else {
      ruleForm.cgsyd = true;
    }
  }
};

const radioChangeGgzp = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "广告招牌二维码管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeGgzp = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.ggzp = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioGgzp.value = false;
    } else {
      ruleForm.ggzp = false;
      disradioGgzp.value = true;
      if (radioGgzp.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "广告招牌二维码管家",
              roleName: radioGgzp.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioGgzp.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.ggzp = false;
    } else {
      ruleForm.ggzp = true;
    }
  }
};

const radioChangeYczl = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "扬尘治理大数据协同管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeYczl = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.yczl = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioYczl.value = false;
    } else {
      ruleForm.yczl = false;
       disradioYczl.value = true;
      if (radioYczl.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "扬尘治理大数据协同管家",
              roleName: radioYczl.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioYczl.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.yczl = false;
    } else {
      ruleForm.yczl = true;
    }
  }
};


const radioChangeSzhcs = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "数字化城市信息管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeSzhcs = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.szhcs = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioSzhcs.value = false;
    } else {
      ruleForm.szhcs = false;
      disradioSzhcs.value = true;
      if (radioSzhcs.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "数字化城市信息管家",
              roleName: radioSzhcs.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioSzhcs.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.szhcs = false;
    } else {
      ruleForm.szhcs = true;
    }
  }
};

const radioChangeJgzm = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "景观照明集中控制管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeJgzm = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.jgzm = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioJgzm.value = false;
    } else {
      ruleForm.jgzm = false;
      disradioJgzm.value = true;
      if (radioJgzm.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "景观照明集中控制管家",
              roleName: radioJgzm.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioJgzm.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.jgzm = false;
    } else {
      ruleForm.jgzm = true;
    }
  }
};

const radioChangeShlj = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "生活垃圾分类管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeShlj = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.shlj = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioShlj.value = false;
    } else {
      ruleForm.shlj = false;
      disradioShlj.value = true;
      if (radioShlj.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "生活垃圾分类管家",
              roleName: radioShlj.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioShlj.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.shlj = false;
    } else {
      ruleForm.shlj = true;
    }
  }
};

const radioChangeZhxz = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "综合行政管理执法智慧管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeZhxz = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.zhxz = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioZhxz.value = false;
    } else {
      ruleForm.zhxz = false;
      disradioZhxz.value = true;
      if (radioZhxz.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "综合行政管理执法智慧管家",
              roleName: radioZhxz.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioZhxz.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.zhxz = false;
    } else {
      ruleForm.zhxz = true;
    }
  }
};

const radioChangeDdzh = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "调度指挥管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeDdzh = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.ddzh = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioDdzh.value = false;
    } else {
      ruleForm.ddzh = false;
      disradioDdzh.value = true;
      if (radioDdzh.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "调度指挥管家",
              roleName: radioDdzh.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioDdzh.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.ddzh = false;
    } else {
      ruleForm.ddzh = true;
    }
  }
};

const radioChangeCclj = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "餐厨垃圾收运管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeCclj = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.cclj = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioCclj.value = false;
    } else {
      ruleForm.cclj = false;
      disradioCclj.value = true;
      if (radioCclj.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "餐厨垃圾收运管家",
              roleName: radioCclj.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioCclj.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.cclj = false;
    } else {
      ruleForm.cclj = true;
    }
  }
};

const radioChangeCyyy = (radio) => {
  axios({
    url: "/api/auth/apply_for_permission",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + params.token,
    },
    data: JSON.parse(
      JSON.stringify({
        operator: params.username,
        userName: permissonTelephone.value,
        operateType: "add",
        roleSystem: "餐饮油烟管家",
        roleName: radio,
      })
    ),
    method: "post",
  }).then(function (resp) {
    console.log(2, resp);
    console.log(
      "我管理员" + params.username + "指定人员" + permissonTelephone.value
    );
  });
  ElMessage({
    message: "权限更改申请成功！",
    type: "success",
  });
};

const changeCyyy = (callback, ruleForm) => {
  let text = "";
  if (callback == true) {
    text = "允许访问";
    // row.enable = false
  } else {
    text = "禁止访问";
    // row.enable = true
  }
  var res = confirm(`是否变更权限为${text}`);
  if (res) {
    if (callback == true) {
      ruleForm.cyyy = true;
      ElMessage({
        message: "请选择访问级别！",
        type: "warning",
      });
      disradioCyyy.value = false;
    } else {
      ruleForm.cyyy = false;
      disradioCyyy.value = true;
      if (radioCyyy.value != "") {
        axios({
          url: "/api/auth/apply_for_permission",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.token,
          },
          data: JSON.parse(
            JSON.stringify({
              operator: params.username,
              userName: permissonTelephone.value,
              operateType: "delete",
              roleSystem: "餐饮油烟管家",
              roleName: radioCyyy.value,
            })
          ),
          method: "post",
        }).then(function (resp) {
          console.log(2, resp);
          console.log(
            "我管理员" + params.username + "指定人员" + permissonTelephone.value
          );
        });
        radioCyyy.value = "";
        ElMessage({
          message: "权限更改申请成功！",
          type: "success",
        });
      }
    }
  } else {
    if (callback == true) {
      ruleForm.cyyy = false;
    } else {
      ruleForm.cyyy = true;
    }
  }
};
//==============================================================================================================

//===================================================================大图片定时更换（一个月）
var curIndex = 0;
var picture = ref("1");
var timeInterval = 1000 * 60 * 60 * 24;

setInterval(changeImg, timeInterval);
function changeImg() {
  let nowDay = new Date().getDate();
  //每个月1号更换一次图片
  if (nowDay == "1") {
    if (picture.value == "1") {
      picture.value = "3";
    } else {
      picture.value = "1";
    }
  }
}

//================================================================================
const cclj_sites = ref([]);
const gxdc_company = ref([]);
const electricity = ref[("一品天下", "城北体育中心", "枣子巷", "一环路内透")];
const jgzm_alarm_projrect = ref([]);
const jgzm_day_consumption = ref([]);
const jgzm_year_consumption = ref([]);
const jgzm_month_consumption = ref([]);
const retailCount = ref([]);
const cateringCount = ref([]);
const serviceCount = ref([]);
const otherCount = ref([]);
const ljz_table2 = ref([]); //垃圾站
const hwzy_tableData = ref([]); //环卫作业
const ycxt_tableData1 = ref([]);
const ycxt_tableData2 = ref([]); //扬尘系统

const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码！"));
  } else if (value !== form.new_password) {
    callback(new Error("两次密码不相同！"));
  } else {
    callback();
  }
};
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      ElMessageBox.confirm("确认修改密码？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          axios({
            url: "/api/auth/change_password",
            method: "post",
            headers: {
              Authorization: "Bearer" + params.token,
              "Content-Type": " application/json",
            },
            data: form.new_password,
          }).then((res) => {
            if (res.data) {
              ElMessage({
                type: "success",
                message: "修改密码成功！",
              });
            } else {
              ElMessage({
                type: "error",
                message: "修改密码失败！",
              });
            }
          });
          // changePassword(form).then(res => {
          //   console.log(res)
          //   ElMessage({
          //     type: 'success',
          //     message: '修改密码成功！',
          //   })
          // })
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消修改密码！",
          });
        });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const rules = reactive({
  new_password: [{ validator: validatePass, trigger: "blur" }],
  new_password_confirm: [{ validator: validatePass2, trigger: "blur" }],
});

const form = reactive({
  new_password: "",
  new_password_confirm: "",
});
const confirmChangePasswordVisible = ref(false);
const changePermissonDialog = ref(false);
const changePasswordDialog = ref(false);
const echartInit_srzx = () => {
  document
    .getElementById("container_gxdc1")
    .removeAttribute("_echarts_instance_");

  var myChart_gxdc = echarts.init(document.getElementById("container_gxdc1"));
  var myChart_gxdc1 = echarts.init(document.getElementById("container_gxdc2"));
  var option_gxdc2 = {
    title: {
      text: "公司统计",
      textStyle: {
        color: "#ccc",
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["美团", "哈啰", "青桔"],
    },
    series: [
      {
        name: "正常停放",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        textStyle: {
          color: "#ccc",
        },
        emphasis: {
          focus: "series",
        },
        data: [18244, 14765, 19339],
      },
      {
        name: "异常停放",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        textStyle: {
          color: "#ccc",
        },
        data: [2231, 4902, 1872],
      },
      {
        name: "正常行驶",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        textStyle: {
          color: "#ccc",
        },
        data: [1537, 932, 1948],
      },
    ],
  };
  myChart_gxdc1.setOption(option_gxdc2);

  getMainGxdc().then((gxdcData) => {
    var option_gxdc1 = {
      title: {
        text: "单车统计",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "单车",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: gxdcData[2].infoVal, name: "正常停放车辆" },
            { value: gxdcData[1].infoVal, name: "异常停放车辆" },
            { value: gxdcData[3].infoVal, name: "行驶中车辆" },
            // { value: 580, name: 'Email' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_gxdc.setOption(option_gxdc1);
  });
};

const echartInit_ddzh = () => {
  console.log(ddzh_tableData2);
  if (ddzh_tableData2.value.length == 3) {
    ddzh_tableData2.value.unshift({
      isNormal: false,
      identity: "办公室人员",
      num: 0,
    });
  }
  if (ddzh_tableData2.value.length == 4) {
    ddzh_tableData2.value.push({
      isNormal: false,
      identity: "执法人员",
      num: 0,
    });
  }
  document
    .getElementById("container_ddzh1")
    .removeAttribute("_echarts_instance_");
  var myChart_ddzh1 = echarts.init(document.getElementById("container_ddzh1"));
  document
    .getElementById("container_ddzh2")
    .removeAttribute("_echarts_instance_");
  var myChart_ddzh2 = echarts.init(document.getElementById("container_ddzh2"));
  document
    .getElementById("container_ddzh3")
    .removeAttribute("_echarts_instance_");
  var myChart_ddzh3 = echarts.init(document.getElementById("container_ddzh3"));
  var option1 = {
    title: {
      text: "打卡率统计",
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        ddzh_tableData1.value[0].department,
        ddzh_tableData1.value[1].department,
        ddzh_tableData1.value[2].department,
        ddzh_tableData1.value[3].department,
        ddzh_tableData1.value[4].department,
        ddzh_tableData1.value[5].department,
        ddzh_tableData1.value[6].department,
        ddzh_tableData1.value[7].department,
        ddzh_tableData1.value[8].department,
        ddzh_tableData1.value[9].department,
        ddzh_tableData1.value[10].department,
        ddzh_tableData1.value[11].department,
        ddzh_tableData1.value[12].department,
        ddzh_tableData1.value[13].department,
        ddzh_tableData1.value[14].department,
        ddzh_tableData1.value[15].department,
        ddzh_tableData1.value[16].department,
        ddzh_tableData1.value[17].department,
        ddzh_tableData1.value[18].department,
        ddzh_tableData1.value[19].department,
        ddzh_tableData1.value[20].department,
        ddzh_tableData1.value[21].department,
        ddzh_tableData1.value[22].department,
        ddzh_tableData1.value[23].department,
        ddzh_tableData1.value[24].department,
        ddzh_tableData1.value[25].department,
        ddzh_tableData1.value[26].department,
        ddzh_tableData1.value[27].department,
        ddzh_tableData1.value[28].department,
      ],
      axisLabel: {
        //x轴文字的配置
        show: true,
        interval: 0, //使x轴文字显示全
        rotate: 20,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      textStyle: {
        color: "white",
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          (ddzh_tableData1.value[0].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[1].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[2].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[3].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[4].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[5].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[6].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[7].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[8].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[9].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[10].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[11].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[12].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[13].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[14].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[15].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[16].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[17].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[18].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[19].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[20].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[21].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[22].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[23].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[24].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[25].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[26].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[27].checkRate * 100).toFixed(2),
          (ddzh_tableData1.value[28].checkRate * 100).toFixed(2),
        ],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        emphasis: {
          focus: "series",
        },
        textStyle: {
          color: "white",
        },
        label: {
          show: true,
        },
      },
    ],
  };
  var option2 = {
    title: {
      text: "执法人员定位情况",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#ccc",
      },
    },
    series: [
      {
        name: "执法人员",
        type: "pie",
        radius: "50%",
        data: [
          { value: ddzh_tableData2.value[0].num, name: "定位正常人员" },
          { value: ddzh_tableData2.value[4].num, name: "定位异常人员" },
          // { value: 111, name: 222 },
        ],
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + +param.value + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  var option3 = {
    title: {
      text: "协管人员定位情况",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#ccc",
      },
    },
    series: [
      {
        name: "协管人员",
        type: "pie",
        radius: "50%",
        data: [
          { value: ddzh_tableData2.value[1].num, name: "定位正常人员" },
          { value: ddzh_tableData2.value[3].num, name: "定位异常人员" },
          // { value: 111, name: 222 },
        ],
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  myChart_ddzh1.setOption(option1);
  myChart_ddzh2.setOption(option2);
  myChart_ddzh3.setOption(option3);
};
const echartInit_ljz = () => {
  document
    .getElementById("container_ljz1")
    .removeAttribute("_echarts_instance_");
  var myChart_ljz1 = echarts.init(document.getElementById("container_ljz1"));
  document
    .getElementById("container_ljz2")
    .removeAttribute("_echarts_instance_");
  var myChart_ljz2 = echarts.init(document.getElementById("container_ljz2"));
  var option1 = {
    title: {
      text: "垃圾分布统计",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#ccc",
      },
    },
    series: [
      {
        name: "垃圾分布统计",
        type: "pie",
        radius: "50%",
        data: [
          {
            value: ljz_table1.value[1].infoVal.slice(0, -2),
            name: ljz_table1.value[1].infoKey.slice(0, -2),
          },
          {
            value: ljz_table1.value[2].infoVal.slice(0, -2),
            name: ljz_table1.value[2].infoKey.slice(0, -2),
          },
          // { value: 111, name: 222 },
          // { value: 111, name: 222 },
        ],
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  var option2 = {
    title: {
      text: "垃圾统计",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      textStyle: {
        color: "white",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      textStyle: {
        color: "white",
      },
    },
    xAxis: [
      {
        type: "category",
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value} 吨",
        },
      },
    ],
    series: [
      {
        name: "红星站",
        type: "bar",
        stack: "Ad",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        textStyle: {
          color: "white",
        },
        data: [
          ljz_table2.value[3][0],
          ljz_table2.value[3][1],
          ljz_table2.value[3][2],
          ljz_table2.value[3][3],
          ljz_table2.value[3][4],
          ljz_table2.value[3][5],
          ljz_table2.value[3][6],
          ljz_table2.value[3][7],
          ljz_table2.value[3][8],
          ljz_table2.value[3][9],
          ljz_table2.value[3][10],
          ljz_table2.value[3][11],
        ],
      },
      {
        name: "西华站",
        type: "bar",
        stack: "Ad",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        textStyle: {
          color: "white",
        },
        data: [
          ljz_table2.value[4][0],
          ljz_table2.value[4][1],
          ljz_table2.value[4][2],
          ljz_table2.value[4][3],
          ljz_table2.value[4][4],
          ljz_table2.value[4][5],
          ljz_table2.value[4][6],
          ljz_table2.value[4][7],
          ljz_table2.value[4][8],
          ljz_table2.value[4][9],
          ljz_table2.value[4][10],
          ljz_table2.value[4][11],
        ],
      },
    ],
  };
  myChart_ljz1.setOption(option1);
  myChart_ljz2.setOption(option2);
};
const echartInit_syd = () => {
  document
    .getElementById("container_syd1")
    .removeAttribute("_echarts_instance_");
  var myChart_syd1 = echarts.init(document.getElementById("container_syd1"));
  document
    .getElementById("container_syd2")
    .removeAttribute("_echarts_instance_");
  var myChart_syd2 = echarts.init(document.getElementById("container_syd2"));
  var option_syd1 = {
    title: {
      text: "案件分析日统计",
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "案件",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 35,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: syd_data.value[2].infoVal, name: "今日办结案件数量" },
          {
            value: syd_data.value[0].infoVal - syd_data.value[2].infoVal,
            name: "今日待办案件数量",
          },
          // { value: 580, name: 'Email' },
          // { value: 484, name: 'Union Ads' },
          // { value: 300, name: 'Video Ads' }
        ],
      },
    ],
  };
  myChart_syd1.setOption(option_syd1);
  var option_syd2 = {
    title: {
      text: "案件分析月统计",
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "案件",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 35,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: syd_data.value[3].infoVal, name: "本月办结案件数量" },
          {
            value: syd_data.value[1].infoVal - syd_data.value[3].infoVal,
            name: "本月待办案件数量",
          },
          // { value: 580, name: 'Email' },
          // { value: 484, name: 'Union Ads' },
          // { value: 300, name: 'Video Ads' }
        ],
      },
    ],
  };
  myChart_syd2.setOption(option_syd2);
};
const echartInit_cclj = () => {
  document
    .getElementById("container_cclj")
    .removeAttribute("_echarts_instance_");
  var myChart_cclj = echarts.init(document.getElementById("container_cclj"));
  document
    .getElementById("container_cclj1")
    .removeAttribute("_echarts_instance_");
  var myChart_cclj1 = echarts.init(document.getElementById("container_cclj1"));
  var option = {
    title: {
      text: "收运点位统计",
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      axisLabel: {
        //x轴文字的配置
        show: true,
        interval: 0, //使x轴文字显示全
        rotate: 20,
      },
      data: [
        cclj_sites.value[0].street,
        cclj_sites.value[1].street,
        cclj_sites.value[2].street,
        cclj_sites.value[3].street,
        cclj_sites.value[4].street,
        cclj_sites.value[5].street,
        cclj_sites.value[6].street,
        cclj_sites.value[7].street,
        cclj_sites.value[8].street,
        cclj_sites.value[9].street,
        cclj_sites.value[10].street,
        cclj_sites.value[11].street,
        cclj_sites.value[12].street,
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          cclj_sites.value[0].street_site_num,
          cclj_sites.value[1].street_site_num,
          cclj_sites.value[2].street_site_num,
          cclj_sites.value[3].street_site_num,
          cclj_sites.value[4].street_site_num,
          cclj_sites.value[5].street_site_num,
          cclj_sites.value[6].street_site_num,
          cclj_sites.value[7].street_site_num,
          cclj_sites.value[8].street_site_num,
          cclj_sites.value[9].street_site_num,
          cclj_sites.value[10].street_site_num,
          cclj_sites.value[11].street_site_num,
          cclj_sites.value[12].street_site_num,
        ],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  var option1 = {
    title: {
      text: "收运点位统计",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#ccc",
      },
    },
    series: [
      {
        name: "街道点位统计",
        type: "pie",
        radius: "50%",
        data: [
          {
            value: cclj_sites.value[0].street_site_num,
            name: cclj_sites.value[0].street,
          },
          {
            value: cclj_sites.value[1].street_site_num,
            name: cclj_sites.value[1].street,
          },
          {
            value: cclj_sites.value[2].street_site_num,
            name: cclj_sites.value[2].street,
          },
          {
            value: cclj_sites.value[3].street_site_num,
            name: cclj_sites.value[3].street,
          },
          {
            value: cclj_sites.value[4].street_site_num,
            name: cclj_sites.value[4].street,
          },
          {
            value: cclj_sites.value[5].street_site_num,
            name: cclj_sites.value[5].street,
          },
          {
            value: cclj_sites.value[6].street_site_num,
            name: cclj_sites.value[6].street,
          },
          {
            value: cclj_sites.value[7].street_site_num,
            name: cclj_sites.value[7].street,
          },
          {
            value: cclj_sites.value[8].street_site_num,
            name: cclj_sites.value[8].street,
          },
          {
            value: cclj_sites.value[9].street_site_num,
            name: cclj_sites.value[9].street,
          },
          {
            value: cclj_sites.value[10].street_site_num,
            name: cclj_sites.value[10].street,
          },
          {
            value: cclj_sites.value[11].street_site_num,
            name: cclj_sites.value[11].street,
          },
          {
            value: cclj_sites.value[12].street_site_num,
            name: cclj_sites.value[12].street,
          },
        ],
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent + "%)";
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  myChart_cclj.setOption(option);
  myChart_cclj1.setOption(option1);
};

const echartInit_jgzm = () => {
  document
    .getElementById("container_ljdp1")
    .removeAttribute("_echarts_instance_");
  document
    .getElementById("container_ljdp2")
    .removeAttribute("_echarts_instance_");
  //document.getElementById("container_jgzm").removeAttribute("_echarts_instance_");

  var myChart_ljdp1 = echarts.init(document.getElementById("container_ljdp1"));
  var myChart2 = echarts.init(document.getElementById("container_ljdp2"));
  //var myChart_jgzm1 = echarts.init(document.getElementById("container_jgzm"));
  // var myChart4 = echarts.init(document.getElementById("container_jgzm4"))
  // getMainJgzm().then(data => {
  //   var option_jgzm1 = {
  //     title: {
  //       text: '用电量统计',
  //       textStyle: {
  //         color: '#ccc'
  //       }
  //     },
  //     tooltip: {
  //       trigger: 'axis',
  //       axisPointer: {
  //         type: 'shadow'
  //       }
  //     },
  //     xAxis: {
  //       type: 'category',
  //       data: ['昨日电量统计', '月电量统计', '年电量统计']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         data: [data[1].infoVal, data[2].infoVal, data[3].infoVal],
  //         type: 'bar',
  //         showBackground: true,
  //         backgroundStyle: {
  //           color: 'rgba(180, 180, 180, 0.2)'
  //         }
  //       }
  //     ]
  //   }
  //   myChart_jgzm1.setOption(option_jgzm1)
  // })

  getMain().then((data) => {
    var option_ljdp1 = {
      title: {
        text: "巡检店铺数量",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "店铺",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[3].infoVal, name: "总店铺数量" },
            { value: data[0].infoVal, name: "巡检店铺数量" },
            { value: data[2].infoVal, name: "未办证数量" },
            // { value: 580, name: 'Email' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_ljdp1.setOption(option_ljdp1);
  });

  // getMainJgzm().then(data => {
  //   var option_jgzm1 = {
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         data: [120, 200, 150, 80, 70, 110, 130],
  //         type: 'bar',
  //         showBackground: true,
  //         backgroundStyle: {
  //           color: 'rgba(180, 180, 180, 0.2)'
  //         }
  //       }
  //     ]
  //   }
  //   myChart_jgzm1.setOption(option_jgzm1)
  // })
};
function toSystemHjws(item) {
  window.open(item.url);
}
const echartInit = () => {
  document.getElementById("container").removeAttribute("_echarts_instance_");
  document.getElementById("container1").removeAttribute("_echarts_instance_");
  document.getElementById("container2").removeAttribute("_echarts_instance_");
  document.getElementById("container3").removeAttribute("_echarts_instance_");
  document.getElementById("container4").removeAttribute("_echarts_instance_");
  document
    .getElementById("container_yyxt1")
    .removeAttribute("_echarts_instance_");
  document
    .getElementById("container_yyxt2")
    .removeAttribute("_echarts_instance_");
  document
    .getElementById("container_yyxt3")
    .removeAttribute("_echarts_instance_");

  //获取DOM元素并初始化

  var myChart = echarts.init(document.getElementById("container"));
  var myChart1 = echarts.init(document.getElementById("container1"));
  var myChart2 = echarts.init(document.getElementById("container2"));
  var myChart3 = echarts.init(document.getElementById("container3"));
  var myChart4 = echarts.init(document.getElementById("container4"));

  var myChart_yyxt1 = echarts.init(document.getElementById("container_yyxt1"));
  var myChart_yyxt2 = echarts.init(document.getElementById("container_yyxt2"));
  var myChart_yyxt3 = echarts.init(document.getElementById("container_yyxt3"));
  var myChart_yyxt4 = echarts.init(document.getElementById("container_yyxt4"));

  // 指定图表的配置项和数据
  getTrend().then((data) => {
    console.log(data);
    var option = {
      title: {
        text: "事件趋势分析",
        textStyle: {
          color: "#ccc",
        },
      },
      //这里的yAxis就是竖轴，xAxis就是横轴
      // yAxis and xAxis 交换可以改变横向或竖向
      yAxis: {
        data: [
          data[0].type,
          data[2].type,
          data[3].type,
          data[4].type,
          data[5].type,
        ],
      },
      xAxis: {},
      // 数据的来源
      series: [
        {
          name: "source",
          // bar就是柱状图
          type: "bar",
          color: "#dd6b66",
          // 数据
          data: [
            data[0].lian_value,
            data[1].lian_value,
            data[2].lian_value,
            data[3].lian_value,
            data[4].lian_value,
            data[5].lian_value,
          ],
        },
      ],
    };
    myChart.setOption(option);
  });
  getResourceTcwt().then((data) => {
    var option1 = {
      title: {
        text: "来源分析",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "来源",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[0].value, name: data[0].source },
            // { value: 735, name: 'Direct' },
            // { value: 580, name: 'Email' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart1.setOption(option1);
  });

  getRdfx().then((data) => {
    var option2 = {
      title: {
        text: "热点分析",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["立案", "结案"],
        textStyle: {
          color: "#ccc",
        },
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLabel: {
            //x轴文字的配置
            show: true,
            interval: 0, //使x轴文字显示全
            rotate: 20,
          },
          // prettier-ignore
          data: [data[0].sub_type_name, data[1].sub_type_name, data[2].sub_type_name, data[3].sub_type_name, data[4].sub_type_name, data[5].sub_type_name, data[6].sub_type_name, data[7].sub_type_name, data[8].sub_type_name,],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "立案",
          type: "bar",
          data: [
            data[0].inst_num,
            data[1].inst_num,
            data[2].inst_num,
            data[3].inst_num,
            data[4].inst_num,
            data[5].inst_num,
            data[6].inst_num,
            data[7].inst_num,
            data[8].inst_num,
          ],
        },
        {
          name: "结案",
          type: "bar",
          data: [
            data[0].archive_num,
            data[1].archive_num,
            data[2].archive_num,
            data[3].archive_num,
            data[4].archive_num,
            data[5].archive_num,
            data[6].archive_num,
            data[7].archive_num,
            data[8].archive_num,
          ],
        },
      ],
    };
    myChart2.setOption(option2);
  });
  getSjqsfx().then((dataTable) => {
    var option4 = {
      title: {
        textStyle: {
          color: "#ccc",
        },
        text: "事件趋势分析",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        textStyle: {
          color: "#ccc",
        },
        data: [
          dataTable[0].type,
          dataTable[1].type,
          dataTable[2].type,
          dataTable[3].type,
        ],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        axisLabel: { interval: 0 },
        type: "category",
        boundaryGap: false,
        data: [
          dataTable[0].rq,
          dataTable[4].rq,
          dataTable[8].rq,
          dataTable[12].rq,
          dataTable[16].rq,
          dataTable[20].rq,
          dataTable[24].rq,
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: dataTable[0].type,
          type: "line",
          stack: "Total",
          data: [
            dataTable[0].value,
            dataTable[4].value,
            dataTable[8].value,
            dataTable[12].value,
            dataTable[16].value,
            dataTable[20].value,
            dataTable[24].value,
          ],
        },
        {
          name: dataTable[1].type,
          type: "line",
          stack: "Total",
          data: [
            dataTable[1].value,
            dataTable[5].value,
            dataTable[9].value,
            dataTable[13].value,
            dataTable[17].value,
            dataTable[21].value,
            dataTable[25].value,
          ],
        },
        {
          name: dataTable[2].type,
          type: "line",
          stack: "Total",
          data: [
            dataTable[2].value,
            dataTable[6].value,
            dataTable[10].value,
            dataTable[14].value,
            dataTable[18].value,
            dataTable[22].value,
            dataTable[26].value,
          ],
        },
        {
          name: dataTable[3].type,
          type: "line",
          stack: "Total",
          data: [
            dataTable[3].value,
            dataTable[7].value,
            dataTable[11].value,
            dataTable[15].value,
            dataTable[19].value,
            dataTable[23].value,
            dataTable[27].value,
          ],
        },
      ],
    };
    myChart4.setOption(option4);
  });
  getResourceSzcg().then((data) => {
    console.log(data.length);
    if (data.length == 0) {
      var default_data = { value: 0, wtly: "城管平台" };
      data.push(default_data);
    }
    var option3 = {
      title: {
        text: "来源分析",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "来源",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[0].value, name: data[0].wtly },

            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart3.setOption(option3);
  });

  getOverStandard().then((tableData) => {
    var option_yyxt1 = {
      title: {
        text: "超标企业街道分布",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: [
          tableData[0].areaname,
          tableData[1].areaname,
          tableData[2].areaname,
          tableData[3].areaname,
          tableData[4].areaname,
          tableData[5].areaname,
          tableData[6].areaname,
          tableData[7].areaname,
          tableData[8].areaname,
          tableData[9].areaname,
          tableData[10].areaname,
          tableData[11].areaname,
          tableData[12].areaname,
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: { interval: 0 },
      },

      yAxis: {
        type: "value",
      },
      axisTick: {
        alignWithLabel: true,
      },
      series: [
        {
          data: [
            tableData[0].value,
            tableData[1].value,
            tableData[2].value,
            tableData[3].value,
            tableData[4].value,
            tableData[5].value,
            tableData[6].value,
            tableData[7].value,
            tableData[8].value,
            tableData[9].value,
            tableData[10].value,
            tableData[11].value,
            tableData[12].value,
          ],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    myChart_yyxt1.setOption(option_yyxt1);
  });
  getMonitor().then((tableData) => {
    var option_yyxt3 = {
      title: {
        text: "餐饮企业监控级别",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "企业",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: tableData[0].ct, name: "常态" },
            { value: tableData[0].yb, name: "一般" },
            { value: tableData[0].zd, name: "重点" },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_yyxt3.setOption(option_yyxt3);
  });
  getTouSU().then((data) => {
    if (data.tsLastNow.length < 12) {
      for (let i = 0; i < 20; i++) {
        var tmp = { count: 0 };
        data.tsLastNow.push(tmp);
      }
    }
    var option_yyxt2 = {
      title: {
        text: "油烟投诉趋势图",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        textStyle: {
          color: "#ccc",
        },
        data: ["2021", "2022", "2023"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "2021",
          type: "line",

          data: [
            data.tsLastTow[0].count,
            data.tsLastTow[1].count,
            data.tsLastTow[2].count,
            data.tsLastTow[3].count,
            data.tsLastTow[4].count,
            data.tsLastTow[5].count,
            data.tsLastTow[6].count,
            data.tsLastTow[7].count,
            data.tsLastTow[8].count,
            data.tsLastTow[9].count,
            data.tsLastTow[10].count,
            data.tsLastTow[11].count,
          ],
        },
        {
          name: "2022",
          type: "line",

          data: [
            data.tsLast[0].count,
            data.tsLast[1].count,
            data.tsLast[2].count,
            data.tsLast[3].count,
            data.tsLast[4].count,
            data.tsLast[5].count,
            data.tsLast[6].count,
            data.tsLast[7].count,
            data.tsLast[8].count,
            data.tsLast[9].count,
            data.tsLast[10].count,
            data.tsLast[11].count,
          ],
        },
        {
          name: "2023",
          type: "line",

          data: [
            data.tsLastNow[0].count,
            data.tsLastNow[1].count,
            data.tsLastNow[2].count,
            data.tsLastNow[3].count,
            data.tsLastNow[4].count,
            data.tsLastNow[5].count,
            data.tsLastNow[6].count,
            data.tsLastNow[7].count,
            data.tsLastNow[8].count,
            data.tsLastNow[9].count,
            data.tsLastNow[10].count,
            data.tsLastNow[11].count,
          ],
        },
      ],
    };
    myChart_yyxt2.setOption(option_yyxt2);
  });

  getCompanyType().then((data) => {
    var option_yyxt4 = {
      title: {
        text: "餐饮企业类型分布",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "企业",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[0].num, name: data[0].sub_text },
            { value: data[1].num, name: data[1].sub_text },
            { value: data[2].num, name: data[2].sub_text },
            { value: data[3].num, name: data[3].sub_text },
            { value: data[4].num, name: data[4].sub_text },
            { value: data[5].num, name: data[5].sub_text },
            { value: data[6].num, name: data[6].sub_text },

            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_yyxt4.setOption(option_yyxt4);
  });

  // 使用刚指定的配置项和数据显示图表。

  // myChart4.setOption(option4);
};

const config_szcg = {
  series: [
    {
      type: "gauge",
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 25,
      data: [
        {
          name: "itemA",
          value: 65,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
        },
      ],
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      dataItemStyle: {
        lineCap: "round",
      },
      details: {
        show: true,
        formatter: "{value}%",
        style: {
          fill: "#1ed3e5",
          fontSize: 35,
        },
      },
    },
  ],
};
function changeCellStyle(row) {
  // 可自行输出row查看样式
  const styleObject = {
    background: "#303133 !important",
    color: "#ffffff",
    "font-size": "18px",
  };
  return styleObject;
}

var time = new Date().getTime();
//setInterval(refreshSydToken, 1000 * 61)
const today =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();
const tomorrow =
  new Date(time + 1 * 24 * 60 * 60 * 1000).getFullYear() +
  "-" +
  (new Date(time + 1 * 24 * 60 * 60 * 1000).getMonth() + 1) +
  "-" +
  new Date(time + 1 * 24 * 60 * 60 * 1000).getDate();
const token = ref("");
const gxdc = reactive({ url: "" });
const syd = reactive({ url: "" });
const gxdcUrl = ref("");
const tcwtTableData = ref([]);
const hwzy_tableData1 = ref([]);
const ddzh_tableData1 = ref([]);
const ddzh_tableData2 = ref([
  { 超速位置: "无", 速度: "无", 车牌号: "无", 超速时间: "无" },
]);
const syd_data = ref([]);
const sydUrl = ref(
  "https://www.jncgsqbl.com/namespaces/1/categories/1?_user_login_token="
);
const toDdzh = () => {
  router.push({ name: "dept1", params: { num: "3" } });
};
onBeforeMount(() => {
  getMainSyd().then((data) => {
    syd_data.value = data;
  });

  getCheckRate().then((data) => {
    ddzh_tableData1.value = data;
  });
  getCntStatus().then((data) => {
    ddzh_tableData2.value = data;
  });
  getAllEvents(today, tomorrow).then((data) => {
    tcwtTableData.value = data;
  });
  config_szcg.series[0].data[0].value =
    90 %
    getTokenGxdc().then((data) => {
      gxdcUrl.value = data;
      gxdc.url = "http://175.153.176.27:8080/manage/?token=" + gxdcUrl.value;
    });
  getAiAlarm().then((data) => {
    hwzy_tableData1.value = data;
  });
  getCompanyDust().then((data) => {
    ycxt_tableData1.value = data;
  });
  getOverSpeed().then((data) => {
    if (data.length != 0) ycxt_tableData2.value = data;
  });
});
const imgVisible = ref(true);
//用户信息
const user = reactive({
  username: "张三",
  role: "管理员",
});
//日期 周

let date = new Date().toLocaleDateString();
var a = new Array("日", "一", "二", "三", "四", "五", "六");
var str = new Date().getDay();
var week = "星期" + a[str];
function openSystem(item) {
  window.open(item.url);
}
// function toSystem(item) {
//   if(item.isLogin == '0')
//   router.push({ name: item.to, params: item.systemName })
//   else if(item.isLogin == '1' && item.systemId!='14')
//   window.open(item.url)

//   if(item.systemId=='14')
//   window.open(gxdc.url)
// }
//方法重写，摒弃三级页面，后续如果需要用上面这个
function toSystem(item) {
  //每个子系统登录方式不一样
  console.log(item.systemId);
  if (
    item.systemId != "13" &&
    item.systemId != "16" &&
    item.systemId != "17" &&
    item.systemId != "4" &&
    item.systemId != "12"
  ) {
    console.log(item.systemName);
    if (item.url === "") {
      ElMessage({
        showClose: true,
        message: "正在开发中...",
      });
    } else window.open(item.url);
  }
  if (item.systemId == "13")
    //共享单车
    window.open(gxdc.url);
  if (item.systemId == "16") {
    //诉易达

    getToken().then((data) => {
      token.value = data;
      var sydUrl =
        "https://www.jncgsqbl.com/namespaces/1/categories/1?_user_login_token=";
      sydUrl = sydUrl + token.value;
      syd.url = sydUrl;
      console.log(syd.url);
      window.open(syd.url);
    });
  }
  if (item.systemId == "17" || item.systemId == "4") {
    getAiUrl().then((data) => {
      aiUrl.value = data.message;
      console.log(data, aiUrl);
      window.open(aiUrl.value);
    });
  }
  if (item.systemId == "12") {
    var roles = [];
    roles = params.roleId.split(",");
    console.log(roles.indexOf("84"));
    // console.log(params.roleId)
    if (
      roles.indexOf("84") != -1 ||
      roles.indexOf("111") != -1 ||
      roles.indexOf("83") != -1
    ) {
      var ddzh_url =
        "https://101.37.246.72:8079/map/?username=18008060886&pwd=MTIzNDU2";
      window.open(ddzh_url);
    }
    if (roles.indexOf("93") != -1) {
      var ddzh_url =
        "https://101.37.246.72:8079/map/?username=18008061151&pwd=MTIzNDU2";
      window.open(ddzh_url);
    }

    if (roles.indexOf("120") != -1) {
      var ddzh_url =
        "https://101.37.246.72:8079/map/?username=18008061081&pwd=MTIzNDU2";
      window.open(ddzh_url);
    }
    if (
      roles.indexOf("96") != -1 ||
      roles.indexOf("99") != -1 ||
      roles.indexOf("102") != -1
    ) {
      var ddzh_url =
        "https://101.37.246.72:8079/map/?username=18008061109&pwd=MTIzNDU2";
      window.open(ddzh_url);
    } else {
      var ddzh_url =
        "https://101.37.246.72:8079/map/?username=" +
        params.username +
        "&pwd=MTIzNDU2";
      console.log(ddzh_url);
      window.open(item.url);
    }
  } //调度指挥
}
const ljz_table1 = ref([]);

//部门列表, 从后端获取
const depts = ref([]);
onBeforeMount(() => {
  getDeptList().then((response) => {
    depts.value = response;
  });
  getCategory().then((data) => {
    retailCount.value = data[0];
    cateringCount.value = data[2];
    serviceCount.value = data[1];
    otherCount.value = data[3];
  });
  getElectricity().then((data) => {
    jgzm_alarm_projrect.value = data[0];
    jgzm_day_consumption.value = data[1];
    jgzm_month_consumption.value = data[2];
    jgzm_year_consumption.value = data[3];
  });
  getSitesData().then((data) => {
    cclj_sites.value = data;
  });
});
// 系统列表
const systems = ref([]);
onMounted(() => {
  getSystemList().then((data) => {
    systems.value = data;
    // 请求各个子系统要显示的数据
    systems.value.forEach((system) => {
      if (system.api !== "") {
        get(system.api).then((data) => (system.data = data));
        // if (system.systemId == '8') {//垃圾站获取主页+图表数据
        //   console.log(data)
        //   ljz_table1 = data[5]
        //   // console.log(ljz_table1)
        // }
      }
    });
  });

  getMainLjz().then((data) => {
    ljz_table1.value = data;
  });
  getSum().then((data) => {
    ljz_table2.value = data;
  });

  getCarLists().then((data) => {
    hwzy_tableData.value = data;
  });
});
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(-1);
const choosedDeptName = ref();
//选中部门对应的子系统
const choosedSystems = computed(() => {
  //过滤函数
  let filterFun = (system) => {
    // 只显示选中部门的子系统
    return system.deptId === choosedDept.value;
  };
  //显示所有部门的子系统
  if (choosedDept.value === -1) {
    filterFun = () => true;
  }

  return systems.value.filter(filterFun);
  // .filter(system => {
  //   console.log(system)
  //   // 只显示有数据的子系统
  //   return system.data && system.data.length != 0
  // })
});

// 切换显示部门和子系统
const showDepts = ref(true);
function switchShowDepts(deptId, deptName) {
  router.push("dept" + deptId);
  // choosedDept.value = deptId
  // showDepts.value = !showDepts.value
  // choosedDeptName.value = deptName
  // if (deptId != 1) {
  //   imgVisible.value = false
  // }
  // if (deptId == -1) {
  //   imgVisible.value = true

  // }
}

const router = useRouter();
// 跳转到to指定的子系统汇总页面
function show(to, url) {
  wiondow.open(url);
  // if (to === '') {
  //   ll
  //   ElMessage({
  //     showClose: true,
  //     message: '正在开发中...'
  //   })
  // } else {
  //   router.push({ name: to, params: { subsysName } })
  //   window.open(url)
  // }
}

function toMap() {
  router.push("/map");
}
function logout() {
  //TODO 清除登录信息
  params.isLogin = false;
  router.push("/login");
}
</script>

<style scoped>
.my-el-popover {
  background-color: #1677d9;
}

.AI {
  text-align: center;
  height: 292px;
  width: 360px;
  background-size: 100%;
  background-image: url("@/assets/szcg/ai.png");
  opacity: 0.9;
  display: flex;
}

.szcg {
  text-align: center;
  height: 292px;
  width: 360px;
  background-size: 100%;
  background-image: url("@/assets/szcg/szcg.jpg");
  opacity: 0.9;
  display: flex;
}

.syd {
  text-align: center;
  height: 292px;
  width: 360px;
  background-size: 100%;
  background-image: url("@/assets/szcg/syd.jpg");
  opacity: 0.9;
  display: flex;
  background-color: #1677d9;
}

.jgzmInfo {
  width: 100%;
  height: auto;
  margin-left: 5%;
  display: flex;
  padding: 5px;
  color: black;
}

.szcgInfo {
  height: 600px;
  width: 350px;
  height: auto;
  margin-left: 5%;
  padding: 5px;
  color: white;
}

.srzxInfo {
  width: 16%;
  height: 480px;
  padding: 5px;
  text-align: center;
  color: white;
}

.img-wrapper {
  background-size: 100%;
  width: 100%;
  display: flex;
  height: 580px;
}

.description {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  font-size: 20px;
  color: #1677d9;
  margin-left: 5%;
  margin-top: 15px;
  margin-right: 15%;
}

.classification-title {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  font-size: 40px;
  color: #1677d9;
  margin-left: 5%;
  margin-top: 15px;
}

.banner {
  width: 100%;
}

.text-week {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 100%;
}

.text-title {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 30%;
  padding: 5px;
}

.text-logo {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 30%;
  padding: 5px;
}

.buttonToMap {
  font-size: large;
  color: #fff;
}

.el-dropdown-link {
  font-size: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  color: #004b8c;
}

.navHeader {
  background-color: #fff;
  color: #004b8c;
  margin-left: -20px;
  margin-right: -20px;
  height: initial;
  display: flex;
}

.title {
  padding: 25px;
  font-size: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  letter-spacing: 3px;
}

.subsys {
  /**保持子系统栏与标题栏背景色一致 */
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  text-align: center;
}

.classification {
  /**保持子系统栏与标题栏背景色一致 */
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  text-align: center;
  float: right;
  margin-left: 5%;
}

.main {
  display: flex;
  flex-wrap: wrap;
  /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  justify-content: center;
}

.logo-title {
  margin-left: 40px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 25%;
  padding: 5px;
}

.background {
  display: flex;
  flex-wrap: wrap;
  width: 200;
}

.subdepts {
  padding: 0px;
  font-size: 25px;
  margin-left: -25px;
  margin-top: 50%;
  white-space: nowrap;
  float: left;
  text-decoration: underline;
}

.router {
  padding: 15px;
  font-size: 25px;
  margin-left: 10px;
  margin-top: -3px;
  white-space: nowrap;
  letter-spacing: 3px;
}

.logo-icon {
  margin-top: 25px;
  margin-left: 20px;
}

.footer {
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 32px;
  background: #004b8c;
  height: 120px;
}

.foot-info {
  padding: 10px;
}

.el-button-succeed {
  width: 180px;
  flex-wrap: wrap;
  font-size: 20px;
  color: #1677d9;
}

.el-button-null {
  font-size: 20px;
  color: gray;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.header {
  text-align: center;

  /* width:130px;
  overflow: hidden;
  white-space: nowrap; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.card {
  border-radius: 3px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
  margin-right: 25px;
  margin-top: 25px;
  padding: 0px;
  width: 350px;
  background-color: #2775b6;
}

.infoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2775b6;
  padding: 20px;
  margin-top: -10px;
}

.infoList {
  color: #f0f0a8;

  list-style-type: none;
  /* font-style: italic; */
}

.infoList li:hover {
  color: #e9e45d;
  /* text-decoration: underline; */
}

.infoList li:nth-child(even) {
  color: #e9e287;
  font-family: "楷体";

  font-size: 1.1rem;
  line-height: 1.2;
}

.infoList li:nth-child(odd) {
  color: #97e6c2;
}

.infoList li span {
  font-family: "楷体";
  font-weight: bold;
  font-size: 1.1rem;
  color: #ea9ab5;
}

.image {
  float: left;
  height: 300px;
  width: 100%;
  border-radius: 5px;
  display: block;
}

.el-button-hjws {
  font-size: 20px;
  color: white;
}

.radioPermisson {
  padding-left: 5rem;
}
</style>
