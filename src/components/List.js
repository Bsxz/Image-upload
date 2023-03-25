import React, {useEffect} from "react"
import {observer} from "mobx-react"
import {List, Spin} from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import {useStore} from '../stores'
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  img {
    height: 80px;
  }

  span {
    font-size: 12px;
    margin-left: 30px;
    white-space: nowrap;
    &:nth-of-type(1){
      width: 60px;
    }
    &:nth-of-type(2){
      margin-left: 260px;
    }
  }
  
  .delete {
    flex: 1;
    font-size: 15px;
    cursor: pointer;
    text-align: right;
    &:hover {
      color: rgba(0, 0, 255, .9);
    }
  }
`
export default observer(() => {
    const {ListStore} = useStore()
    const loadMoreData = () => {
        if (ListStore.hasMore) {
            ListStore.find()
        }
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    const removeItem = item => () => {
        ListStore.delete(item)
    }
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
                            <span onClick={removeItem(item)} className='delete'>删除</span>
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