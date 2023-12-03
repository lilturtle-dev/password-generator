import React from 'react';
import AppEn from "./AppEn";
import AppUa from "./AppUa";
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/en/*" element={<AppEn />} />
                <Route path="/ua/*" element={<AppUa />} />
                <Route path="/*" element={<AppEn />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes