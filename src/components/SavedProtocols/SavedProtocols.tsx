import SavedProtocolStyle from './style';
import { FaArrowDown, FaEdit, FaEthereum, FaTrash } from 'react-icons/fa';
import { useRef, useState } from 'react';
import EditProtocol from '../EditProtocols/EditProtocol';
import { Icon } from '@iconify/react';
import useProtocolContext from '../../hooks/useProtocolContext';
import { toast } from 'react-toastify';

const SavedProtocols = () => {
  const [editData, setEditData] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<any>();
  const [editId, setEditId] = useState<any>();
  const { savedProtocols, setSavedProtocols, chainId } = useProtocolContext();

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  // 1.locate the item to be dragged
  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: any) => {
    dragItem.current = position;
    console.log(e.target, 'event');
  };

  //2. Track items being dragged
  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: any) => {
    dragOverItem.current = position;
    console.log(e.target, 'event');
  };

  // 3.Rearrange the list
  const drop = () => {
    const copyListItems = [...savedProtocols];
    const dragItemContent = copyListItems[dragItem.current as number];
    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setSavedProtocols(copyListItems);
  };

  // Edit Handler
  const handleEdit = (protocol_id: string, data: any, name: string, index: number) => {
    setEditId(index);
    setEditData({ protocol_id, name, data });
    setIsEdit(true);
  };

  // Delete Handler
  const handleDelete = (id: number) => {
    const filteredData = savedProtocols.filter(({ protocol_id }: any) => protocol_id !== id);
    setSavedProtocols(filteredData);
  };

  console.table(savedProtocols);

  return (
    <>
      <div>
        <SavedProtocolStyle>
          {(savedProtocols && savedProtocols.length) !== 0 && (
            <div className="list">
              {savedProtocols?.map((data: any, index: number) => {
                const { protocol_id, protocolIcon, function_configs, name, protocolName } = data;
                return (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={
                      data.hasOwnProperty('notDraggable')
                        ? () => {
                            toast('Borrow and Payback are paired. They must be in tact');
                          }
                        : drop
                    }>
                    <div className={`mt-2 box ${index === editId ? 'd-none' : 'd-block'}`}>
                      <div className={`head-bar d-flex justify-content-between isEdit`}>
                        <button className="method-btn w-100 mb-3 fs-6">{name}</button>
                        <h5 className="text-center">
                          <Icon
                            className="me-2"
                            width="24"
                            height="24"
                            color="white"
                            icon={protocolIcon}
                          />
                          {protocolName}
                        </h5>
                        {!data['flashLoan-end'] && (
                          <div className="action-btn">
                            {/* <FaEdit
                              className="cursor-pointer"
                              fontSize={20}
                              onClick={() => {
                                console.log('EDIT');
                                // handleEdit(protocol_id, data, name, index);
                                // setEditData({ protocol_id, name, data });
                              }}
                            /> */}
                            <FaTrash
                              className="ms-3 cursor-pointer"
                              fontSize={20}
                              onClick={() => handleDelete(protocol_id)}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        key={index}
                        className={`${
                          data?.methodName == 'flashLoan' && !data['flashLoan-start']
                            ? 'd-none'
                            : 'd-block'
                        }`}>
                        <div className="d-flex justify-content-between">
                          <div className="chain d-flex align-items-center mb-2">
                            <Icon
                              icon={
                                function_configs?.tokens[chainId]?.find(
                                  ({ symbol }: any) => symbol === data.initialData.token
                                )?.icon
                              }
                              width="24"
                              height="24"
                              color="white"
                            />
                            <p className="token ms-2 mt-1">{data.initialData.token}</p>
                          </div>
                          <p className="price ms-2 mt-1">{data.initialData.amount}</p>
                        </div>
                        <div
                          className={`${
                            data?.methodName == 'flashLoan' && !data['flashLoan-start']
                              ? 'd-none'
                              : 'd-block'
                          }`}>
                          <div className="d-flex align-items-center">
                            <FaArrowDown fontSize={20} className="ms-2" />
                            <div className="bottom-border" />
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${
                          data.methodName === 'flashLoan' && !data['flashLoan-start']
                            ? 'd-none'
                            : 'd-block'
                        }`}>
                        <div key={index} className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <FaEthereum fontSize={24} />
                            <p className="token ms-2 mt-1">aWeth</p>
                          </div>
                          <p className="price ms-2 mt-1">{122}</p>
                        </div>
                      </div>
                      {/* <div
                        key={index}
                        className={`d-flex justify-content-between 
                            ${data['flashLoan-start'] ? 'd-block' : 'd-none'}`}>
                        <p className="ms-2 mt-1">aWeth | 3%</p>
                        <p className="price ms-2 mt-1">
                          <FaExclamation fontSize={16} />
                        </p>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </SavedProtocolStyle>
      </div>
      <div className={`${isEdit ? 'd-block' : 'd-none'}`}>
        <EditProtocol
          data={editData}
          setIsEdit={setIsEdit}
          setEditData={setEditData}
          setEditId={setEditId}
        />
      </div>
    </>
  );
};

export default SavedProtocols;
