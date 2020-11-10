import $http from '../http'


//患者列表
export function ClientRecordList(listpage) {
  return $http({
    method: 'post',
    url: 'Customer/ClientRecordList',
    data: listpage
  })
}


//就诊记录
export function SearchExamRecord(listpage) {
  return $http({
    method: 'post',
    url: 'EMR/SearchExamRecord',
    data: listpage
  })
}

//新建就诊档案保存
export function SaveOptometryFromMobile(optometryDetailModelViews) {
  return $http({
    url: 'EMR/SaveOptometryFromMobile',
    method: 'post',
    data: {
      optometryDetailModelViews
    }
  })
}


//就诊档案详情
export function GetOptometryDetail(emaKeyId) {
  return $http({
    url: 'EMR/GetOptometryDetail',
    params: {
      emaKeyId
    }
  })
}


//就诊档案详情/api/EMR/UpdateExamDetail
export function UpdateExamDetail(emaKeyId, pcOptometyOD, pcOptometyOS, optometryDetailOD, optometryDetailOS, intraPresOD, intraPresOS) {
  return $http({
    url: 'EMR/UpdateExamDetail',
    method: "post",
    data: {
      emaKeyId, pcOptometyOD, pcOptometyOS, optometryDetailOD, optometryDetailOS, intraPresOD, intraPresOS
    }
  })
}



