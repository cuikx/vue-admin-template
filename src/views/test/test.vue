<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="仓库编号" width="180"></el-table-column>
    <el-table-column prop="warehouseName" label="仓库名称" width="180"></el-table-column>
    <el-table-column prop="countrycode" label="仓库所在国家" width="180"></el-table-column>
    <el-table-column prop="timezone" label="仓库时区"></el-table-column>
    <el-table-column prop="portNames" label="对应港口"></el-table-column>
    <!-- <el-table-column prop="address" label="合作商名称"></el-table-column>
    <el-table-column prop="address" label="对应合作商仓库"></el-table-column> -->
    <el-table-column prop="status" label="仓库当前状态"></el-table-column>
    <el-table-column prop="sortindex" label="仓库分组排序"></el-table-column>
    <el-table-column prop="province" label="仓库地址"></el-table-column>
    <el-table-column prop="contacts" label="仓库联系人电话"></el-table-column>
    <el-table-column prop="modifiedon" label="创建时间"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted: function() {
    // 网络请求直接写在文件中
    this.req({
      url: "http://localhost:8081/warehouse/queryWarehousesByPage",
      data: {
        "pageNum":1,
        "pageSize":10,
        "warehouseName":"",
        "portName":"",
        "status":1
      },
      method: "GET"
    }).then(
      res => {
        this.tableData = res.data;
      },
      err => {
        console.log("err :", err);
      }
    );
  },
  methods: {}
};
</script>

<style>
</style>