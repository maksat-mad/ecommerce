import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useFetching} from "../../../../hook/useFetching";
import UserService from "../../../../service/user/UserService";
import Loader from "../../loader/Loader";
import Error from "../../error/Error";
import {Link} from "react-router-dom";
import ExitButton from "../../exit-button/ExitButton";
import '../Admin.css';
import AreYouSureModal from "../../modal/AreYouSureModal";
import AdminCard from "../../card/AdminCard";

const AdminManagement = () => {
    const {t} = useTranslation();
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isChange, setIsChange] = useState(true);
    const [id, setId] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        setIsLoading(true);
        const response = await UserService.getUserForAdminManagement(query);
        setUsers([...response.data]);
        setIsLoading(false);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem('path', '/create-admin');
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [query]);

    useEffect(async () => {
        if (id === -1) {
            return;
        }
        setIsLoading(true);
        await UserService.removeFromAdmin(id)
            .then(() => console.log('removed from admin successfully'))
            .catch(() => console.log('failed to remove admin'));
        fetchUsers();
        setIsLoading(false);
    }, [isChange]);

    const handleInputChange = () => {
        setQuery(query);
    }

    return (
        <>
            <div className={"container"}>
                <h1>{t('remove_from_admin')}</h1>
            </div>
            <div className={"container"}>
                <input
                    onChange={handleInputChange}
                    type="text" className={"admin-search"}
                    placeholder={t('search')} autoComplete={"off"}
                />
            </div>
            {isLoading ?
                <div className={"container"}>
                    <Loader/>
                </div>
                :
                <>
                    {users.length === 0
                        ?
                        <div className={"container"}>
                            <h1>{t('not_found')}</h1>
                        </div>
                        :
                        <>
                            <div className={"container"}>
                                {usersError && <Error message={usersError}/>}
                                {isUsersLoading && <Loader/>}
                            </div>
                            <div className={"container"}>
                                <div>
                                    {users.map(user => {
                                        return <AdminCard
                                            card={user}
                                            text={t('remove_from_admin')}
                                            operation={'remove'}
                                            setId={setId}
                                            setModalOpen={setModalOpen}
                                        />
                                    })}
                                    <div className={"my-container"}>
                                        <Link to="/profile">{t('cancel')}</Link>
                                    </div>
                                    <ExitButton link={"/profile"}/>
                                    {modalOpen &&
                                        <AreYouSureModal
                                            yes={t('yes')}
                                            no={t('no')}
                                            areYouSure={t('areYouSure')}
                                            setIsOpen={setModalOpen}
                                            isChange={isChange}
                                            setIsChange={setIsChange}
                                        />
                                    }
                                </div>
                            </div>
                        </>
                    }
                </>
            }
        </>
    );
};

export default AdminManagement;