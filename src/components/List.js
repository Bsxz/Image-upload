import React, {useEffect} from "react"
import {observer} from "mobx-react"
import {List, Spin} from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import {useStore} from '../stores'
import styled from "styled-components";
const Box = styled.div`
      display: flex;
      height: 80px;
      align-items: center;

      img {
        height: 80px;
      }

      span {
        font-size: 12px;
        margin-left: 30px;
      }
    `
export default observer(() => {
    const {ListStore} = useStore()
    const loadMoreData = () => {
        if (ListStore.hasMore) {
            ListStore.find()
            ListStore.page += 1
        }else {
            console.log(ListStore.list)
        }
    };
    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <InfiniteScroll
            initialLoad={true}
            dataLength={ListStore.list.length}
            next={loadMoreData}
            hasMore={!ListStore.isLoading && ListStore.hasMore}
            useWindow={true}
        >
            <List
                dataSource={ListStore.list}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Box>
                            <img src={item.attributes.url.attributes.url} alt='img'/>
                            <span>{item.attributes.filename}</span>
                            <span><a href={item.attributes.url.attributes.url}
                                     rel='noopener noreferrer'
                                     target="_blank">{item.attributes.url.attributes.url}</a></span>
                        </Box>
                    </List.Item>
                )}
            >
                {ListStore.isLoading && ListStore.hasMore && (
                    <div>
                        <Spin tip="加载中"/>
                    </div>
                )}
            </List>
        </InfiniteScroll>
    )
})