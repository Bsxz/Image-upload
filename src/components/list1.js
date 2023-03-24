// import React, {useEffect} from "react"
// import {observer} from "mobx-react"
// import {List, Spin, Skeleton} from 'antd'
// import VirtualList from 'rc-virtual-list'
// import {useStore} from '../stores'
// import styled from "styled-components";
//
// export default observer(() => {
//     const {ListStore} = useStore()
//
//     useEffect(() => {
//         ListStore.find()
//         ListStore.page += 1
//     }, [ListStore]);
//     const onScroll = (e) => {
//         if (ListStore.hasMore) {
//             if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
//                 ListStore.find()
//                 ListStore.page += 1
//             }
//         }
//     };
//     const StyledList = styled(List)`
//       margin-top: 100px;
//     `
//
//     const Box = styled.div`
//       display: flex;
//       height: 80px;
//       align-items: center;
//
//       img {
//         height: 80px;
//       }
//
//       span {
//         font-size: 12px;
//         margin-left: 30px;
//       }
//     `
//     return (
//         <StyledList loadMore={<Spin spinning={ListStore.isLoading} tip='加载中'/>}>
//             <VirtualList
//                 data={ListStore.list}
//                 height={400}
//                 itemHeight={55}
//                 itemKey="item"
//                 onScroll={onScroll}
//             >
//                 {(item) => (
//                     <List.Item key={item}>
//                         <Box>
//                             <img src={item.attributes.url.attributes.url} alt='img'/>
//                             <span>{item.attributes.filename}</span>
//                             <span><a href={item.attributes.url.attributes.url}
//                                      rel='noopener noreferrer'
//                                      target="_blank">{item.attributes.url.attributes.url}</a></span>
//                         </Box>
//                     </List.Item>
//                 )}
//             </VirtualList>
//         </StyledList>
//     )
// })