import request from "./request"

/**
 * 获取博客列表
 * @returns
 */
export const getBlogList = async (params: any = {}) => {
  const { data } = await request({
    url: '/service/blog/all',
    method: 'get',
    params
  })
  return data;
}

/**
 * 获取个人简介列表
 * @returns
 */
export const getCvList = async () => {
  const { data } = await request({
    url: '/service/cv/list',
    method: 'get'
  })
  return data;
}

/**
 * 获取博客详情
 * @param params
 * @returns
 */
export const getBlogDetail = async (params: { blogId: string | number }) => {
  const { data } = await request({
    url: '/service/blog/detail',
    method: 'get',
    params
  })
  return data;
}

/**
 * 获取tagList
 */
export const getTagList = async () => {
  const { data } = await request({
    url: '/service/tag/list',
    method: 'get',
  })
  return data;
}
