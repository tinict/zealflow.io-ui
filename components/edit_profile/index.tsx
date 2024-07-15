import React, { useEffect, useState } from "react";
import {
    Card, CardBody, Divider, Button, useDisclosure, Modal, ModalContent, ModalHeader
} from "@nextui-org/react";
import AvatarBordered from "../avatars/bordered";
import { PersonalProfile } from "./personal";
import { Bio } from "./bio";
import { formatDate, formatFullName, formatGender, formatPhone } from "@/helpers/validate";

export default function EditProfile({ ...props }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isOpenInfo, setOpenInfo] = useState(false);
    const [isOpenBio, setOpenBio] = useState(false);
    const { data } = props;

    const handleEditInfo = () => {
        setOpenInfo(true);
        setOpenBio(false);
        onOpen();
    };

    const handleEditBio = () => {
        setOpenInfo(false);
        setOpenBio(true);
        onOpen();
    };

    return (
        <>
            <Card className="max-w-[600px]">
                <CardBody>
                    <div>
                        <div className="flex justify-between py-2 items-center">
                            <span className="text-md text-gray-500">Avatar</span>
                            <Button color="primary">Edit</Button>
                        </div>
                        <div className="flex justify-center mb-2.5">
                            <AvatarBordered
                                classAttribute={{
                                    style: "w-36 h-36 rounded-full",
                                }}
                            />
                        </div>
                    </div>
                    <Divider />
                    <div className="flex justify-between py-2 items-center">
                        <span className="text-md text-gray-500">Personal Information</span>
                        <Button
                            color="primary"
                            onPress={handleEditInfo}
                        >
                            Edit
                        </Button>
                    </div>
                    <div className="px-4 py-6">
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Full Name:</span>
                            <span>{formatFullName(data?.firstname, data?.lastname)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Gender:</span>
                            <span>{formatGender(data?.gender)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Date of Birth:</span>
                            <span>{formatDate(data?.dob)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Phone:</span>
                            <span>{formatPhone(data?.phone)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Location:</span>
                            <span>Test</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm text-gray-500">Email:</span>
                            <span>{data?.email}</span>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex justify-between py-2 items-center">
                        <span className="text-md text-gray-500">Bio</span>
                        <Button
                            color="primary"
                            onPress={handleEditBio}
                        >
                            Edit
                        </Button>
                    </div>
                    <div className="py-2">
                        <p>
                            <span>{data?.bio}</span>
                            {data?.bio === null && (
                                <p className="text-gray-500 italic">
                                    Description itself...
                                </p>
                            )}
                        </p>
                    </div>
                </CardBody>
            </Card>
            {isOpen && (
                <Modal isOpen={true} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent>
                        <>
                            <ModalHeader>
                                Edit Profile
                            </ModalHeader>
                            {
                                isOpenInfo && <PersonalProfile data={data} />
                            }
                            {
                                isOpenBio && <Bio data={data} />
                            }
                        </>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
